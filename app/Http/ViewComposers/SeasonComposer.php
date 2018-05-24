<?php

namespace App\Http\ViewComposers;

use App\Repositories\SeasonRepository;
use Carbon\Carbon;
use App\Models\Season;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\View\View;

class SeasonComposer
{
    /**
     * @var Season
     */
    protected $season;

    /**
     * SeasonComposer constructor.
     * @param SeasonRepository $seasonRepository
     */
    public function __construct(SeasonRepository $seasonRepository)
    {
        try {
            $this->season = $seasonRepository->find(['date' => Carbon::now()]);
        } catch (ModelNotFoundException $e) {
            $this->season = new Season(['name' => 'Spring']);
        }
    }

    /**
     * Bind data to the view.
     *
     * @param View $view
     */
    public function compose(View $view): void
    {
        $view->with(array_merge([
            'currentSeason' => $this->season,
            ], $view->getData()));
    }
}
