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

  <div className="card" style={{ transition: "0.5s", border: "none", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)", width: "autoa", fontFamily: "Noto Sans"}}>
    <img height="auto" style={{borderBottom: "10px solid #EB3349"}} width="100%" className="thumbnail card-img-top" alt='' src={urlToImage} key={urlToImage} />
      <div className="card-block">
        <h3 className="card-title">
          <a
          style={{fontWeight: "bold", color: "#151515", textDecoration:"none", cursor: "pointer"}}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={url}>{title.toUpperCase()}</a></h3>
        <div className="card-block" style={{ borderTop: "1px solid #EB3349", color:"black"}}>
        <p className="card-text" key={author}>{author}</p>
          <p className="card-text" key={publishedAt}>{ publishedAt ? publishedAt.slice(0, 10).split('-').reverse().join('/') : publishedAt }</p>
        <p className="card-text" key={description}
          style={{fontSize:"relative"}}>{description}</p>
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
    color: "white"
  }}></i></Link>
  <h1 style={{
      textAlign: "center",
      paddingBottom: "20px",
      fontSize: "80px",
      color: "white",
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
