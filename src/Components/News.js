import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

  
  const update = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsed = await data.json();
    setArticles(parsed.articles);
    // setPage(page);
    setTotalResults(parsed.totalResults);
    setLoading(false);
  }
  
  useEffect(() => {
      return () => {
        document.title ="News - " + props.category.charAt(0).toUpperCase() + props.category.slice(1);
        update();
        // eslint-disabled-next-line
    };
  }, [])
//   async componentDidMount() {
//     this.update();
//   }
  
  const fetchMoreData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsed = await data.json();
      setArticles(articles.concat(parsed.articles));
      setPage(page + 1);
      setTotalResults(parsed.totalResults);
  };
    return (
      <>
            <h1 className="text-center" style={{marginTop:'45px', paddingTop: "15px" }}>iNEWS Headlines{" "}</h1>
            <h3 className="text-center mb-3">{props.category.charAt(0).toUpperCase() +props.category.slice(1)}{" "}News</h3>
            {loading && <Spinner/>}
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
            >
            <div className="container ">
                <div className="row">
                    {articles.map((e) => {
                        return (
                        <div className="col-md-4 my-2 " key={e.url}>
                            <Newsitem
                            url={e.url}
                            author={e.author}
                            date={e.publishedAt}
                            title={e.title ? e.title.slice(0, 40) : ""}
                            description={
                                e.description ? e.description.slice(0, 90) : ""
                            }
                            urlToImage={
                                e.urlToImage
                                ? e.urlToImage
                                : "https://www.reuters.com/resizer/JKXN9Kls6TbThng6hcUYe6U7Zs0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VFCNQIRQ5RIITGYEEWKZQIRVYA.jpg"
                            }
                            newsUrl={e.url}
                            />
                        </div>
                        );
                    })}
                </div>
            </div>
            </InfiniteScroll>
        
      </>
    );

}

export default News;

News.defaultProps = {
  country: "us",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
