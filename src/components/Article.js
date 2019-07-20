import React from 'react'
import './Article.less'

const Article = ({ article }) => {
  const { title, source, url, urlToImage, description } = article

  return (
    <div className="article-wrapper">
      <div className="row">
        <div className="col-md-10 article">
          <div className="col-md-2 article-image">
            <img src={urlToImage} alt={title} className="img-responsive"></img>
          </div>
          <div className="col-md-10">
            <a href={url} target="_blank" className="article-data">
              <h4>{title}</h4>
              <p className="article-description">{description}</p>
              <span className="article-source">{source.name}</span>
            </ a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
