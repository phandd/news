import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'
import { fetchNews, loadMore, openArticle } from '../actions'

const NewsContainer = props => {
  useEffect(() => {
    props.fetchNews()
  }, [])

  return (
    <div>
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
  openArticle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsContainer)
