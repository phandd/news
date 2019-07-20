import NewsAPI from 'newsapi'
import { NEWS_SOURCES } from '../constants'
import actionTypes from './actionTypes'

const { v2: newsapi } = new NewsAPI('c66744023d5d4921b3319b7e8aedfbce')

export {
  fetchNews
}

const fetchNews = options => dispatch => {
  newsapi.topHeadlines({
    ...options,
    sources: NEWS_SOURCES
  })
  .then(response => {
    dispatch({
      type: actionTypes.NEWS_FETCH_SUCCESS,
      news: response.articles
    })
  })
}
