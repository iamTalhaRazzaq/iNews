import React, { Component } from 'react'

// rec
export class Newsitem extends Component {
  render() {
    
    let {title, description,urlToImage,author,date,url} = this.props
    return (
      <div>
        <div className="card ">
        <img src={urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
