import NewsAPI from 'newsapi'
import { NEWS_SOURCES } from '../constants'
import actionTypes from './actionTypes'

const { v2: newsapi } = new NewsAPI('57b51d7cd3204e2da44fea3dd47748f2')
const fetchNews = options => dispatch => {
  dispatch({
    type: actionTypes.NEWS_FETCHING
  })

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

const openArticle = article => ({
  type: actionTypes.OPEN_ARTICLE,
  article
})

export {
  fetchNews,
  loadMore,
  search,
  openArticle
}