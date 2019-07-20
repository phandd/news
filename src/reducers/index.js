import actionTypes from '../actions/actionTypes'

const defaultState = {
  news: {
    articles: [],
    page: 0,
    search: ''
  },
  history: {
    articles: []
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.NEWS_FETCH_SUCCESS:
      return {
        ...state,
        news: {
          ...state.news,
          articles: action.articles,
          page: 1
        }
      }

    case actionTypes.NEWS_LOAD_MORE_SUCCESS:
      return {
        ...state,
        news: {
          ...state.news,
          articles: [...state.news.articles, ...action.articles],
          page: state.news.page + 1
        }
      }

    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        news: {
          ...state.news,
          search: action.keyword
        }
      }
  
    case actionTypes.OPEN_ARTICLE:
      return {
        ...state,
        history: {
          articles: [action.article, ...state.history.articles]
        }
      }
  
    default:
      return state
  }
}
