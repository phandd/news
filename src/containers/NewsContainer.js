import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'
import SearchBar from '../components/SearchBar'
import { fetchNews, loadMore, search, openArticle } from '../actions'

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
    <div>
        <SearchBar doSearch={debouncedSearch} />
        <Articles {...props} />
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.news.articles
})

const mapDispatchToProps = {
  fetchNews,
  loadMore,
  search,
  openArticle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsContainer)
