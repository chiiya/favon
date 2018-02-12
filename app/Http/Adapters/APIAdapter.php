<?php

namespace App\Http\Adapters;

use bandwidthThrottle\tokenBucket\BlockingConsumer;
use bandwidthThrottle\tokenBucket\Rate;
use bandwidthThrottle\tokenBucket\storage\FileStorage;
use bandwidthThrottle\tokenBucket\TokenBucket;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Psr7\Request;

/**
 * API adapter for limiting outgoing API requests
 * Class APIAdapter
 */
abstract class APIAdapter
{
    public const IDENTIFIER = 'general';

    /**
     * @var BlockingConsumer
     */
    protected $consumer;

    /**
     * @var Client
     */
    protected $client;

    /**
     * APIAdapter constructor.
     *
     * @param int    $limit
     * @param string $unit
     */
    public function __construct(int $limit, string $unit)
    {
        $storage = new FileStorage(storage_path().'/api/'.self::IDENTIFIER.'.bucket');
        $rate = new Rate($limit, $unit);
        $bucket = new TokenBucket($limit, $rate, $storage);
        $this->consumer = new BlockingConsumer($bucket);
        $bucket->bootstrap($limit);
        $this->client = new Client();
    }

    /**
     * Request a resource.
     *
     * @param Request $request
     *
     * @throws ClientException
     *
     * @return mixed|\Psr\Http\Message\ResponseInterface
     */
    public function request(Request $request)
    {
        $this->consumer->consume(1);
        return $this->client->send($request, ['http_errors' => false]);
    }

    /**
     * Delete the token bucket.
     */
    public function close() : void
    {
        unlink(storage_path().'/api/'.self::IDENTIFIER.'.bucket');
    }

}