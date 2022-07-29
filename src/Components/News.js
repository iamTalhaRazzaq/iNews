import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title =
      "News - " +
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1);
  }
  async update() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ce774655c604c799fa06b4bc4fe9d6c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed = await data.json();
    this.setState({
      page: this.state.page,
      totalResults: parsed.totalResults,
      articles: parsed.articles,
      loading: false,
    });
  }
  async componentDidMount() {
    this.update();
  }
  
  fetchMoreData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ce774655c604c799fa06b4bc4fe9d6c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsed = await data.json();
      this.setState({
          totalResults: parsed.totalResults,
          articles: this.state.articles.concat(parsed.articles),
          page: this.state.page + 1
        });
  };

  render() {
    return (
      <>
            <h1 className="text-center" style={{marginTop:'45px', paddingTop: "15px" }}>iNEWS Headlines{" "}</h1>
            <h3 className="text-center mb-3">{this.props.category.charAt(0).toUpperCase() +this.props.category.slice(1)}{" "}News</h3>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            >
            <div className="container ">
                <div className="row">
                    {this.state.articles.map((e) => {
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
