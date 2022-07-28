import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
static defaultProps = {
    country:'us',
    pageSize:9,
    category:'general'
}
static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}


constructor(props)
{
    super(props);
    this.state={
        articles:[],
        loading:true,
        page:1
    }
    document.title = 'News - '+this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1);
}
async update()
{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ce774655c604c799fa06b4bc4fe9d6c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsed = await data.json();
    this.setState({page :this.state.page, articles:parsed.articles, loading:false})
}
async componentDidMount()
{
    this.update();
    
}
handlePrev = async () => {
    this.setState({page :this.state.page-1});
    this.update(); 
    
}
handleNext = async () => {
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
        this.setState({page :this.state.page+1});
        this.update();
    }
}

  render() {
      return (
        <div className='container my-5'>
            <h1 className='text-center' style={{paddingTop:'15px'}}>iNEWS Headlines </h1>
            <h3 className='text-center mb-3'>{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News</h3>
            {this.state.loading && <Spinner/>}
            <div className='row'>
                {!this.state.loading && this.state.articles.map((e)=>{
                    return <div className='col-md-4 my-2 'key={e.url}>
                    <Newsitem author={e.author} date={e.publishedAt} title={e.title?e.title.slice(0,40):""} description={e.description?e.description.slice(0,90):""} url={e.urlToImage?e.urlToImage:'https://www.reuters.com/resizer/JKXN9Kls6TbThng6hcUYe6U7Zs0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VFCNQIRQ5RIITGYEEWKZQIRVYA.jpg'}  newsUrl={e.url}/>
                    </div>
                })}
            </div>
            <div className='d-flex justify-content-between my-5'>
                <button onClick={this.handlePrev} disabled={this.state.page<=1} type="button" className="btn btn-dark">&larr; Previous </button>    
                <button onClick={this.handleNext} disabled={this.state.page>this.totalResults}  type="button" className="btn btn-dark">Next &rarr;</button>
            </div>
        </div>
    )
  }
}

export default News


