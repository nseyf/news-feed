import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';
import Loader  from '../components/Loader'
import { Link } from 'react-router-dom';

class ShowHeadlines extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
    let src = this.props.location.pathname.slice(11)
  this.props.fetchNews(src)

  }


renderHeadlines(article){

const { title, author, publishedAt, description, url, urlToImage } = article;

return (

  <div className="card" style={{ transition: "0.5s", border: "none", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)", width: "auto", fontFamily: "Noto Sans"}}>
    <img height="auto" width="100%" className="thumbnail card-img-top" alt='' src={urlToImage} key={urlToImage} />
      <div style={{padding: "40px"}} className="card-block">
          <p className="card-text" style={{color: "#151515"}} key={publishedAt}>{ publishedAt ? publishedAt.slice(0, 10).split('-').reverse().join('/') : publishedAt }</p>
        <h3 className="card-title">
          <a
          style={{fontWeight: "bold", color: "#151515", textDecoration:"none", cursor: "pointer"}}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={url}>{title}</a></h3>
        <div className="card-block" style={{ borderTop: "1px solid #EB3349", color:"#151515"}}>
        <p style ={{fontSize: "15px", fontWeight: "100", color: "grey", }}className="card-text" key={author}>{author}</p>
        <p className="card-text" key={description}
          style={{fontSize:"15px"}}>{description}</p>
        <a rel="noopener noreferrer" href={url} target="_blank" style={{fontSize: "20px", fontWeight: "bold", color: "#151515"}}><i style={{paddingRight: "10px"}} className="fa fa-arrow-circle-right fa-1.5x" aria-hidden="true"></i>Read More</a>
      </div>
      </div>
  </div>


)

}

  render() {
let fetchedNews = this.props.news["0"];

if(!fetchedNews){
  return <Loader />
} else {
return (
  <div className="container">
<div className="row">
<Link to="/"><i className="fa fa-4x fa-arrow-left" aria-hidden="true"
  style={{
    paddingBottom: "10px",
    paddingTop: "10px",
    color: "#f5f5f5"
  }}></i></Link>
  <h1 style={{
      textAlign: "center",
      paddingBottom: "15px",
      fontSize: "80px",
      color: "#f5f5f5",
      borderBottom: "1px solid white",
      marginBottom: "25px",
      fontFamily: "Noto Sans",
      fontWeight: "600"}}>{fetchedNews.source.toUpperCase().split('-').join(' ')}</h1>
</div>
    <div className="card-columns">
{fetchedNews.articles.map(this.renderHeadlines)}
  </div>
</div>
    )
  }
}
}

function mapStateToProps({ news }) {
  return { news }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({ fetchNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowHeadlines);
