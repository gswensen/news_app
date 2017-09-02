import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
import MainHeader from './components/MainHeader';
import ArticleView from './components/ArticleView';
import SearchBar from './components/SearchBar';
import newsapikey from './newsapikey.js';
import axios from 'axios';


class App extends Component {
  

   getFirstArticles() {
     const sources = ['the-new-york-times', 'the-wall-street-journal', 'the-washington-post', 'associated-press', 'usa-today', 'bbc-news']
     for(let i=0;i<6;i++) {
      let url = `https://newsapi.org/v1/articles?source=${sources[i]}&sortBy=top&apiKey=${newsapikey}`;
      axios.get(url).then((res)=>{
       
          this.setState(Object.assign(res.data, this.props.articlesDisplayed))
        
      })
     }
     console.log(this.state)
   }

  render() {
    return (
      <div className='main_parent'>
      <div className="AppBackground">
      </div>
        <div className='App'>
        <MainHeader/>
        <SearchBar/>
        <ArticleView className='article_view_container'/>
        </div>
        </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     articlesDisplayed: state.articlesDisplayed
//   }
// }

// export default connect(mapStateToProps)(App);
export default App;
