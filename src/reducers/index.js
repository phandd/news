import actionTypes from '../actions/actionTypes'

const defaultState = {
  news: [],
  history: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.NEWS_FETCH_SUCCESS:
      return { ...state, news: action.news }
  
    default:
      return state
  }
}
