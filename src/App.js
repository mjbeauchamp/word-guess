import React, { Component } from 'react';
import axios from 'axios';
import ListGrid from './components/ListGrid'
import ShowWord from './components/ShowWord'
import CategoryCreate from './components/CategoryCreate'
import NavBar from './components/NavBar';
import CategoryEdit from './components/CategoryEdit';
import './App.css';
import './components/ListCard.css'
import './components/ListGrid.css'
import './components/ShowWord.css'
import './components/CategoryCreate.css'
import './components/CategoryEdit'
import './components/NavBar.css'
import './components/EditDelBtn.css'


class App extends Component {
  constructor(){
    super();
    this.state = {
      showListGrid: true,
      showShowWord: false,
      showCategoryCreate: false,
      showCategoryEdit: false,
      categories: {},
      clickedCard: "",
      idNum: 0,
      selectedId: 0,
      selectedTitle: "",
      selectedWordArr: []
    }
  }

  //This is what the call looks like from ListCard: props.showEditList(e, idNum, title, wordArr)
  showEditList = (e, idNum, title, wordArr) => {
    e.stopPropagation();
    this.setState({
      showShowWord: false,
      showListGrid: false,
      showCategoryEdit: true,
      showCategoryCreate: false,
      selectedId: idNum,
      selectedTitle: title,
      selectedWordArr: wordArr
    })
  }

  saveClickedCard = (listName) => {
    let card = listName.toLowerCase();
    this.setState({
      clickedCard: card
    })
  }

  componentDidMount(){
    axios.get("/api/list_grid").then(response => {
      this.setState({
          categories: response.data.categories,
          idNum: response.data.idNum
      })
      }).catch(err => {
      console.log(err)
    })
  }

  showWord = () => {
    this.setState({
      showShowWord: true,
      showListGrid: false,
      showCategoryEdit: false,
      showCategoryCreate: false
    })
  }

  showCreateList = () => {
    this.setState({
      showShowWord: false,
      showListGrid: false,
      showCategoryEdit: false,
      showCategoryCreate: true
    })
  }

  //accepts an optoinal variable for if the showHome funciton is triggered from the CategoryCreate component
  showHome = (newCatReturnedCategories) => {
    axios.get("/api/list_grid").then(response => {
      this.setState({
        showShowWord: false,
        showListGrid: true,
        showCategoryCreate: false,
        showCategoryEdit: false,
        categories: response.data.categories,
        idNum: response.data.idNum
      })
    })
  }

  render() {
    let shownComponent;
    if(this.state.showListGrid){
      shownComponent = <ListGrid saveClickedCard={this.saveClickedCard} showWord={this.showWord} showCategoryEdit={this.showCategoryEdit} showEditList={this.showEditList} showHome={this.showHome}/>
    } else if(this.state.showShowWord){
      shownComponent = <ShowWord categories={this.state.categories} clickedCard={this.state.clickedCard}/>
    } else if(this.state.showCategoryCreate){
      shownComponent = <CategoryCreate showHome={this.showHome} idNum={this.state.idNum}/>
    } else if(this.state.showCategoryEdit){
      shownComponent = <CategoryEdit showHome={this.showHome} selectedId={this.state.selectedId} selectedTitle={this.state.selectedTitle} selectedWordArr={this.state.selectedWordArr}/>
    }

    return (
      <div>
        <NavBar createPageBool={`${this.state.showCategoryCreate}`} showHome={this.showHome} showCreateList={this.showCreateList}/>
        {shownComponent}
      </div>
    );
  }
}

export default App;
