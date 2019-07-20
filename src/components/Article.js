import React from 'react'
import './Article.less'

const Article = ({ article, openArticle }) => {
  const { title, source, url, urlToImage, description } = article
  const articleClickHandler = () => {
    openArticle(article)
    window.open(url)
  }

  return (
    <div className="col-md-6 offset-md-3">
      <div className="article-wrapper">
        <div className="article-image" onClick={articleClickHandler}>
          <img src={urlToImage} alt={title} className="img-responsive"></img>
        </div>
        <div className="">
          <div className="article-data" onClick={articleClickHandler}>
            <h4>{title}</h4>
            <p>{description}</p>
            <span className="article-source small">{source.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
