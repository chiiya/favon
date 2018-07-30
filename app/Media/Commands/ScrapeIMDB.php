<?php

namespace Favon\Media\Commands;

use Illuminate\Console\Command;
use Favon\Media\Services\IMDBScraper;

class ScrapeIMDB extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'favon:imdb:scrape {url}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scrape IMDB ids from an IMDB list of movies / tv-shows';

    /**
     * @var IMDBScraper
     */
    protected $imdbScraper;

    /**
     * ScrapeIMDB constructor.
     *
     * @param IMDBScraper $scraper
     */
    public function __construct(IMDBScraper $scraper)
    {
        $this->imdbScraper = $scraper;
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $ids = $this->imdbScraper->scrape($this->argument('url'));
        $this->info('Scraping IMDB IDs...');
        $this->line(json_encode($ids));
    }
}
