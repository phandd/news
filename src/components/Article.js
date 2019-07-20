import React from 'react'
import './Article.less'

const Article = ({ article, openArticle }) => {
  const { title, source, url, urlToImage, description } = article
  const articleClickHandler = () => {
    openArticle(article)
    window.open(url)
  }

  return (
    <div className="article-wrapper">
      <div className="row">
        <div className="col-md-10 article">
          <div className="col-md-2 article-image">
            <img src={urlToImage} alt={title} className="img-responsive"></img>
          </div>
          <div className="col-md-10">
            <div className="article-data" onClick={articleClickHandler}>
              <h5>{title}</h5>
              <p className="article-description">{description}</p>
              <span className="article-source">{source.name}</span>
            </ div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
