import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component.jsx'



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

  render(){
    const {monsterArr, searchField} = this.state;
    const filteredArr = monsterArr.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <input type="search" placeholder="Search Monster" onChange={e => {this.setState({searchField: e.target.value})}}/>
      {console.log(this.state)}
      <CardList monsters={filteredArr}/>
      
    </div>
    
  );
}
}

export default App;

