import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchSources } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader'

class SelectSource extends Component {

componentDidMount(){
  this.props.fetchSources()
}

renderSources(newsSource){
const { name, id, description } = newsSource;

if(!newsSource) {
  return <Loader />
} else {
return (
  <Link key={id} to={`/headlines/${id}`} style={{background: "#7c4dff"}} className="list-group-item">
    <div>
    <h4 style={{ borderBottom: "1px solid #b47cff", color: "white", fontWeight: "bold"}} className="list-group-item-heading" key={name}>{name.toUpperCase()}</h4>
    <p style={{color: "white"}} className="list-group-item-text" key={description}>{description}</p>
    </div>
  </Link>
)
}
}



  render() {
  let sourceList = this.props.sources["0"];

  if(!sourceList) {
    return <div></div>
  } else {
    return (
      <div className="container">
<div className="list-group">
  <ul style={{ fontFamily: "Noto Sans", listStyleType: "none", display: "inline"}}>
  {sourceList.sources.map(this.renderSources)}
</ul>
</div>
</div>
    )
  }
  }
}

function mapStateToProps(state){
return { sources: state.sources }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSources }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSource);
