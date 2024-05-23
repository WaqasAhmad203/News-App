import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const apiKey = "Enter your apikey here"

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)




  const updateNews = async (pageno) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    updateNews()
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };


  return (
    <>
      <h2 className='text-center my-3 fs-1 '>Top Headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
News.defaultProps = {
  country: 'us',
  pageSize: 9,
  category: 'gernal',
}
News.propsType = {
  contry: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News