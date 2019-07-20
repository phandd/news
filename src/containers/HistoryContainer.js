import React from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'

const NewsContainer = props => {
  return (
    <Articles {...props} />
  )
}

const mapStateToProps = state => ({
  articles: state.history.articles
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsContainer)
