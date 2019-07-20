import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'
import Nothing from '../components/Nothing'
import { fetchNews, loadMore, openArticle } from '../actions'

const NewsContainer = props => {
  const { fetchNews, articles, fetching } = props

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  return (
    <div>
      {(articles.length || fetching) ? <Articles {...props} /> : <Nothing />}
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.news.articles,
  fetching: state.news.fetching
})

const mapDispatchToProps = {
  fetchNews,
  loadMore,
  openArticle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsContainer)
