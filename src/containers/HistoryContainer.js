import React from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'

const NewsContainer = props => {
  return (
    <div>
      {props.articles.length ? <Articles {...props} /> : <div className="history-empty">History is empty</div>}
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
