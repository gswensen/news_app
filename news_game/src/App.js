import React, { Component } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import ArticleView from './components/ArticleView';
import newsapikey from './newsapikey.js';
import axios from 'axios';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        articles: [["Sint anim non Lorem mollit minim id sit Lorem officia sit. Tempor aute ullamco non sint. Nostrud mollit dolore ullamco sint officia. Ex sit labore sunt exercitation. Pariatur dolor ipsum eu veniam magna cupidatat pariatur labore est cupidatat. Eu esse officia minim ipsum reprehenderit dolore duis aliquip culpa aute ea."], ['test_text2']],
        search_text:"test"
    }
    this.createArticles = this.createArticles.bind(this)
    this.getFirstArticles = this.getFirstArticles.bind(this)

  }
    createArticles() {
      // let source = 'the-new-york-times'
      axios.get(`https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=c8615522df474a6ba7412fa0551ef7fd`)
        .then(response => {
          console.log(response.data.articles)
          this.setState({articles: response.data.articles})
          console.log(this.state)
      })
    }
    afterFirstResponse() {
      let url = 'http://localhost:3030/top_stories'
      axios.get(url).then((res) => {
        
      })

    }
    getArticleText(evt, text,cb) {
      console.log(evt)
      let url = 'https://www.nytimes.com/2017/08/28/us/politics/trump-tower-putin-felix-sater.html';
      // let url = 'http://localhost:3030/top_stories'
      axios.get(url).then((res) => {
        this.setState({articles:res.data})
        
        
      })
    }
   getFirstArticles() {
     const sources = ['the-new-york-times', 'the-wall-street-journal', 'the-washington-post', 'associated-press', 'usa-today', 'bbc-news']
     for(let i=0;i<6;i++) {
      let url = `https://newsapi.org/v1/articles?source=${sources[i]}&sortBy=top&apiKey=${newsapikey}`;
      axios.get(url).then((res)=>{
        this.setState(Object.assign({i: res}, this.state))
        console.log(res,`api call ${i}`)
      })
     }
     console.log(this.state)
   }

  render() {
    return (
      <div className="App">
        <MainHeader/>
        <span className='search_container'>
          <input className='search_input' value={this.state.search_text}></input>
          <button className='search_button' onClick={(e, search_text)=> this.getFirstArticles(e)} >find...</button>
        </span>
        <ArticleView articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
