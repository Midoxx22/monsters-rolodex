import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component.jsx'

import { SearchBox } from "./components/search-box/search-box.component.jsx"



class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello World",
      monsterArr: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(test => this.setState({monsterArr: test}))
  } 

  changeHandler = e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsterArr, searchField} = this.state;
    const filteredArr = monsterArr.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox placeholder="Suche Monster" handleChange={this.changeHandler}/>
      <CardList monsters={filteredArr}/>
      
    </div>
    
  );
}
}

export default App;

