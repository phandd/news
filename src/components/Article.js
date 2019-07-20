import React from 'react'

const Article = ({ article }) => {
  const { title, source, url, urlToImage, desciption } = article

  return (
    <div>{title}</div>
  )
}

export default Article
