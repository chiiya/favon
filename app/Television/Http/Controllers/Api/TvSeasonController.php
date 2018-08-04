<?php

namespace Favon\Television\Http\Controllers\Api;

use Illuminate\Http\Request;
use Favon\Application\Http\Controller;
use Favon\Media\Repositories\SeasonRepository;
use Favon\Television\Repositories\TvSeasonRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TvSeasonController extends Controller
{
    /**
     * @var SeasonRepository
     */
    protected $seasonRepository;

    /**
     * @var TvSeasonRepository
     */
    protected $tvSeasonRepository;

    /**
     * TvSeasonsController constructor.
     * @param SeasonRepository $seasonRepository
     * @param TvSeasonRepository $tvSeasonRepository
     */
    public function __construct(SeasonRepository $seasonRepository, TvSeasonRepository $tvSeasonRepository)
    {
        $this->seasonRepository = $seasonRepository;
        $this->tvSeasonRepository = $tvSeasonRepository;
    }

    /**
     * Get a list of all tv seasons for a given season.
     *
     * @param Request $request
     * @param int $id
     *
     * @throws NotFoundHttpException
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request, int $id): \Illuminate\Http\JsonResponse
    {
        $user = $request->user();
        try {
            $season = $this->seasonRepository->get($id);
            $tvSeasons = $this->tvSeasonRepository->index([
                'seasonal' => true,
                'sequels' => true,
                'season_id' => $season->id,
                'user' => $user,
            ]);
        } catch (ModelNotFoundException $exception) {
            throw new NotFoundHttpException();
        }

        return response()->json([
            'season' => $season,
            'tvSeasons' => $tvSeasons,
        ]);
    }
}
