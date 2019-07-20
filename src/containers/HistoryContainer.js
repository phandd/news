import React from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'
import Nothing from '../components/Nothing'

const NewsContainer = props => {
  return (
    <div>
      {props.articles.length ? <Articles {...props} /> : <Nothing />}
    </div>
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
