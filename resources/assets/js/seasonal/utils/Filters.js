export default class Filters {
  /**
   * Filter to compare two tv season entries and sort by a given property
   * @param {object} a
   * @param {object} b
   * @param {string} key
   * @returns {number}
   */
  static sortBy(a, b, key) {
    switch (key) {
      case 'score':
        return this.compareByScore(a, b);
      case 'name':
        return this.compareByName(a, b);
      case 'start_date':
        return this.compareByStartDate(a, b);
      case 'recently_added':
        return this.compareByRecentlyAdded(a, b);
      default:
        return this.compareByPopularity(a, b);
    }
  }

  /**
   * Filter out specific genres
   * @param {object} season
   * @param {Array} selectedGenres - Array of genre ids that the user has selected
   * @param {Array} genres - Array with all available genre ids
   * @returns {boolean}
   */
  static filterByGenre(season, selectedGenres, genres) {
    // Filter out specific genres. The user selects the genres he wants to include,
    // but what we actually want to do is _exclude_ all seasons that have one of
    // the not selected genres, since this way the filtering makes more sense.
    const filteredGenres = new Set(selectedGenres);
    const excludeGenres = new Set([...genres].filter(x => !filteredGenres.has(x)));
    const hasExcludedGenre = season.tv_show.genres.some(genre => excludeGenres.has(genre.id));
    return !hasExcludedGenre;
  }

  /**
   * Filter by score (all seasons must be above a minimum score provided by the user)
   * @param {object} season
   * @param {number} min
   * @returns {boolean}
   */
  static filterByScore(season, min) {
    return season.tv_show.imdb_score === 0 || season.tv_show.imdb_score >= min;
  }

  /**
   * Filter out sequels (or not, depending on user selection)
   * @param {object} season
   * @param {boolean} sequelsList
   * @param {boolean} sequels
   * @returns {boolean}
   */
  static filterSequels(season, sequelsList, sequels) {
    // Filter out sequels, depending on user configuration
    if (sequelsList === true
      && (
        (season.user_tv_seasons && season.user_tv_seasons.length > 0)
        || (season.tv_show.user_tv_shows && season.tv_show.user_tv_shows.length > 0)
      )) {
      return true;
    }
    return sequels ? true : season.number === 1;
  }

  /**
   * Filter by selected languages
   * @param {object} season
   * @param {array} languages - Languages the user wants to include
   * @returns {boolean}
   */
  static filterByLanguage(season, languages) {
    const includeLanguages = new Set(languages);
    return season.tv_show.languages.some(language => includeLanguages.has(language.pivot.language_code));
  }

  /**
   * Filter by list status
   * @param season
   * @param {array} statuses - List statuses the user wants to include
   * @returns {boolean}
   */
  static filterByListStatus(season, statuses) {
    const includeStatuses = new Set(statuses);
    if (season.user_tv_seasons && season.user_tv_seasons.length > 0) {
      const status = season.user_tv_seasons[0].list_status_id;
      return includeStatuses.has(status);
    }
    return includeStatuses.has('not_in_list');
  }

  /**
   * Filter out non-rated shows
   * @param season
   * @param unrated
   * @returns {boolean}
   */
  static filterByRated(season, unrated) {
    return unrated ? true : season.tv_show.imdb_score !== 0;
  }

  /**
   * Compare two tv season entries by IMDB score
   * @param {object} a
   * @param {object} b
   * @returns {number}
   */
  static compareByScore(a, b) {
    if (a.tv_show.imdb_score > b.tv_show.imdb_score) {
      return -1;
    }
    if (a.tv_show.imdb_score < b.tv_show.imdb_score) {
      return 1;
    }
    return this.compareByName(a, b);
  }

  /**
   * Compare two tv season entries by their tv show name
   * @param {object} a
   * @param {object} b
   * @returns {number}
   */
  static compareByName(a, b) {
    return a.tv_show.name.localeCompare(b.tv_show.name);
  }

  /**
   * Compare two tv season entries by their start date
   * @param {object} a
   * @param {object} b
   * @returns {number}
   */
  static compareByStartDate(a, b) {
    if (a.first_aired > b.first_aired) {
      return -1;
    }
    if (a.first_aired < b.first_aired) {
      return 1;
    }
    return this.compareByName(a, b);
  }

  /**
   * Compare two tv season entries by their created at date
   * @param {object} a
   * @param {object} b
   * @returns {number}
   */
  static compareByRecentlyAdded(a, b) {
    if (a.created_at > b.created_at) {
      return -1;
    }
    if (a.created_at < b.created_at) {
      return 1;
    }
    return this.compareByName(a, b);
  }

  /**
   * Compare two tv season entries by their popularity score
   * @param {object} a
   * @param {object} b
   * @returns {number}
   */
  static compareByPopularity(a, b) {
    if (a.tv_show.popularity > b.tv_show.popularity) {
      return -1;
    }
    if (a.tv_show.popularity < b.tv_show.popularity) {
      return 1;
    }
    return this.compareByName(a, b);
  }
}
