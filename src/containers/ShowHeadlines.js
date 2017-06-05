import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';
import Loader  from '../components/Loader'

class ShowHeadlines extends Component {

  componentDidMount() {
    let src = this.props.location.pathname.slice(11)
  this.props.fetchNews(src)
  }




renderHeadlines(article){

const { title, author, publishedAt, description, url, urlToImage } = article;

return (

  <div className="card" style={{ transition: "2s", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)", width: "auto", fontFamily: "Noto Sans"}}>
    <img height="auto" width="100%" className="thumbnail card-img-top" alt='' src={urlToImage} key={urlToImage} />
      <div className="card-block">
        <h3 className="card-title"><a
          style={{fontWeight: "bold", color: "#7c4dff", textDecoration:"none", cursor: "pointer"}}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={url}>{title.toUpperCase()}</a></h3>
        <div className="card-block" style={{ color:"black"}}>
        <p className="card-text" key={author}>{author}</p>
          <p className="card-text" key={publishedAt}>{publishedAt}</p>
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
