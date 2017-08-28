import React, { Component } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import ArticleView from './components/ArticleView';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        articles: [["Sint anim non Lorem mollit minim id sit Lorem officia sit. Tempor aute ullamco non sint. Nostrud mollit dolore ullamco sint officia. Ex sit labore sunt exercitation. Pariatur dolor ipsum eu veniam magna cupidatat pariatur labore est cupidatat. Eu esse officia minim ipsum reprehenderit dolore duis aliquip culpa aute ea."], ['test_text2']],

    }
    this.createArticles = this.createArticles.bind(this)
  }
  createArticles(data) {

  }

  render() {
    return (
      <div className="App">
        <MainHeader/>
        <ArticleView articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
