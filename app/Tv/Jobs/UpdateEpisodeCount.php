<?php

namespace Favon\Tv\Jobs;

use Favon\Tv\Models\TvSeason;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Favon\Tv\Repositories\TvEpisodeRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UpdateEpisodeCount implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var TvSeason
     */
    protected $tvSeason;

    /**
     * Create a new job instance.
     *
     * UpdateEpisodeCount constructor.
     * @param TvSeason $tvSeason
     */
    public function __construct(TvSeason $tvSeason)
    {
        $this->tvSeason = $tvSeason;
    }

    /**
     * Execute the job.
     *
     * @param TvEpisodeRepository $tvEpisodeRepository
     */
    public function handle(TvEpisodeRepository $tvEpisodeRepository): void
    {
        $this->tvSeason->episode_count = $tvEpisodeRepository->count(['tv_season_id' => $this->tvSeason->id]);
        $this->tvSeason->save();
    }
}