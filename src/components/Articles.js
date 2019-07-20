import React, { Component } from 'react'
import Article from './Article'

class Articles extends Component {
  constructor(props) {
    super(props)
    this.attachScrollListener = this.attachScrollListener.bind(this)
    this.scrollListener = this.scrollListener.bind(this)
  }

  componentDidMount() {
    if (this.props.loadMore) {
      this.attachScrollListener()
    }
  }

  componentDidUpdate() {
    if (this.props.loadMore) {
      this.attachScrollListener()
    }
  }

  componentWillUnmount() {
    if (this.props.loadMore) {
      this.detachScrollListener()
    }
  }

  scrollListener() {
    if (document.body.offsetHeight - window.innerHeight - window.pageYOffset < 500) {
      this.props.loadMore();
      this.detachScrollListener()
    }
  }

  attachScrollListener() {
    window.addEventListener(
      'scroll',
      this.scrollListener
    )
  }

  detachScrollListener() {
    window.removeEventListener(
      'scroll',
      this.scrollListener
    )
  }

  render() {
    const articles = this.props.articles.map((article, index) =>
      <Article
        article={article}
        key={article.url + index}
        openArticle={this.props.openArticle}
      />
    )

    return (
      <div>
        <div>
          {articles}
        </div>
      </div>
    )
  }
}

export default Articles
