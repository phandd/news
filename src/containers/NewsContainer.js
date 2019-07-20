import React, { Component } from 'react'
import { connect } from 'react-redux'
import News from '../components/News'
import { fetchNews } from '../actions'

class NewsContainer extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    return (
      <News news={this.props.news} />
    )
  }
}

const mapStateToProps = state => ({
  news: state.news
})

const mapDispatchToProps = {
  fetchNews
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsContainer)
