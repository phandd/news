import NewsAPI from 'newsapi'
import { NEWS_SOURCES } from '../constants'
import actionTypes from './actionTypes'

const { v2: newsapi } = new NewsAPI('c66744023d5d4921b3319b7e8aedfbce')

export {
  fetchNews,
  loadMore
}

const fetchNews = options => dispatch => {
  newsapi.everything({
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
  newsapi.everything({
    sources: NEWS_SOURCES,
    page: getState().news.page + 1
  })
  .then(response => {
    dispatch({
      type: actionTypes.NEWS_LOAD_MORE_SUCCESS,
      articles: response.articles
    })
  })
}