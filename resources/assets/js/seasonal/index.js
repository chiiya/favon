import Vue from 'vue';
import axios from 'axios';
import luma from 'lumacss';
import { format } from 'date-fns';

import '../../scss/main.scss';
import TvSeasonCard from './components/TvSeasonCard';
import Filter from './components/Filters';
import Store from './store';
import Filters from './utils/Filters';

Vue.component('tv_season', TvSeasonCard);
Vue.component('filters', Filter);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  data: {
    /**
     * Store instance
     * @type {Object}
     */
    store: Store.data,
    /**
     * Visibility of the filter popup
     * @type {Boolean}
     */
    showFilter: false,
  },
  beforeMount() {
    const currentSeason = document.getElementById('currentSeason').dataset.season;
    axios.get(`/api/seasonal/${currentSeason}`)
      .then((response) => {
        const data = response.data;
        this.store.season = data.season;
        this.store.tv_seasons = data.tvSeasons;
        this.formatDates();
        this.filter();
      });
    axios.get('/api/genres')
      .then((response) => {
        this.store.genres = response.data;
        this.store.genreIds = this.store.genres.map(genre => genre.id);
      });
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.popup, .popup__trigger') === null) {
        this.showFilter = false;
      }
    });
    luma.select('.select');
  },
  methods: {
    /**
     * Apply the user selected (or default) filters to the tv_seasons array.
     */
    filter() {
      this.store.filtered = this.store.tv_seasons.filter((season) => {
        let include;
        // Filter out sequels, depending on user configuration
        include = Filters.filterSequels(season, this.store.filters.sequels);
        if (include === false) return false;

        // Filter by IMDB score
        include = Filters.filterByScore(season, this.store.filters.score);
        if (include === false) return false;

        // Filter by genres
        include = Filters.filterByGenre(season, this.store.filters.genres.values, this.store.genreIds);
        if (include === false) return false;

        // Filter by language
        return Filters.filterByLanguage(season, this.store.filters.languages);
      });

      // Lastly, sort the filtered array by the selected user criteria.
      this.store.filtered = this.store.filtered.sort((a, b) => Filters.sortBy(a, b, this.store.filters.sort));
    },
    /**
     * Format the `first_aired` dates into an easier format (`Mar 22, 2018`)
     */
    formatDates() {
      this.store.tv_seasons.forEach((season) => {
        // eslint-disable-next-line no-param-reassign
        season.first_aired_string = format(new Date(season.first_aired), 'MMM D, YYYY');
      });
    },
  },
});
