import React, { Component } from 'react'
import Article from './Article'

class Articles extends Component {
  constructor(props) {
    super(props)
    this.scrollElement = React.createRef()
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
    const articles = this.props.articles.map(article => <Article article={article} key={article.url} />)

    return (
      <div ref={this.scrollElement}> 
        {articles}
      </div>
    )
  }
}

export default Articles
