import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'
import { fetchNews, loadMore, search } from '../actions'

const NewsContainer = props => {
  let timeout
  const debouncedSearch = keyword => {
    if (!timeout) {
      timeout = setTimeout(() => {
        props.search(keyword)
      }, 300);
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        props.search(keyword)
      }, 300);
    }
  }

  useEffect(() => {
    props.fetchNews()
  }, [])

  return (
    <Articles {...props} search={debouncedSearch} />
  )
}

const mapStateToProps = state => ({
  articles: state.news.articles
})

const mapDispatchToProps = {
  fetchNews,
  loadMore,
  search,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsContainer)
