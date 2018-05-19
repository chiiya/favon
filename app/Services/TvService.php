<?php

namespace App\Services;

use App\Repositories\TvShowRepository;
use App\Repositories\TvSeasonRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TvService
{
    protected $tvShowRepository;
    protected $tvSeasonRepository;

    public function __construct(TvShowRepository $tvShowRepository, TvSeasonRepository $tvSeasonRepository)
    {
        $this->tvShowRepository = $tvShowRepository;
        $this->tvSeasonRepository = $tvSeasonRepository;
    }

    /**
     * Get the banner of a randomly selected, currently popular show.
     *
     * @return string|null
     */
    public function getBanner(): ?string
    {
        $selected = $this->tvShowRepository->getRandomPopularShow();
        try {
            $latestSeason = $this->tvSeasonRepository->find([
                'tv_show_id' => $selected->id,
                'orderBy' => ['number', 'DESC'],
            ]);
            $banner = $latestSeason->banner ?? $selected->banner;
        } catch (ModelNotFoundException $e) {
            $banner = $selected->banner;
        }

        return $banner;
    }
}
