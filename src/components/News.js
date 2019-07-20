import React from 'react'
import Article from './Article'

const News = ({ news }) => {
  const articles = news.map(article => <Article article={article} key={article.url} />)

  return (
    <div> 
      {articles}
    </div>
  )
}

export default News
