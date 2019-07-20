import React, { Component } from 'react'
import Article from './Article'
import SearchBar from './SearchBar'

class Articles extends Component {
  constructor(props) {
    super(props)
    this.attachScrollListener = this.attachScrollListener.bind(this)
    this.scrollListener = this.scrollListener.bind(this)
  }

  componentDidMount() {
    this.attachScrollListener()
  }

  componentDidUpdate() {
    this.attachScrollListener()
  }

  componentWillUnmount() {
    this.detachScrollListener()
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
    const articles = this.props.articles.map((article, index) => <Article article={article} key={article.url + index} />)

    return (
      <div>
        <SearchBar doSearch={this.props.search} />
        <div>
          {articles}
        </div>
      </div>
    )
  }
}

export default Articles
