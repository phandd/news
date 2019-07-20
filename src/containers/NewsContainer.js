import React, { Component } from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'
import { fetchNews, loadMore } from '../actions'

class NewsContainer extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    return (
      <Articles {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  articles: state.news.articles
})

const mapDispatchToProps = {
  fetchNews,
  loadMore
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsContainer)
