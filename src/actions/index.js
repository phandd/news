import NewsAPI from 'newsapi'
import { NEWS_SOURCES } from '../constants'
import actionTypes from './actionTypes'

const { v2: newsapi } = new NewsAPI('c66744023d5d4921b3319b7e8aedfbce')
const fetchNews = options => dispatch => {
  return newsapi.everything({
    ...options,
    sources: NEWS_SOURCES
  })
  .then(response => {
    dispatch({
      type: actionTypes.NEWS_FETCH_SUCCESS,
      articles: response.articles
    })
  })
}

const loadMore = () => (dispatch, getState) => {
  const state = getState()
  const options = {
    sources: NEWS_SOURCES,
    page: state.news.page + 1
  }

  if (state.news.search) {
    options.q = state.news.search
  }

  return newsapi.everything(options)
  .then(response => {
    dispatch({
      type: actionTypes.NEWS_LOAD_MORE_SUCCESS,
      articles: response.articles
    })
  })
}

const search = keyword => dispatch => {
  dispatch(fetchNews({ q: keyword })).then(() => {
    dispatch({
      type: actionTypes.SEARCH_SUCCESS,
      keyword
    })
  })
}

export {
  fetchNews,
  loadMore,
  search
}