import React, { Component } from 'react';
import axios from 'axios';
import ListCard from './ListCard'

class ListGrid extends Component{
    constructor(){
        super();
        this.state = {
            categoryData: [],
            categoryNames: [],
            idNum: 0,
            quote: ""
        }
    }

    componentDidMount(){
        axios.get("/api/list_grid").then(response => {
            let newArr = [];
            response.data.categories.forEach(val => {
                newArr.push(val.title)
            })
            this.setState({
                categoryNames: newArr,
                idNum: response.data.idNum,
                categoryData: response.data.categories
            })
        }).catch(err => {
            console.log(err)
        })
    }

    deleteList = (e, idNum, title) => {
        e.stopPropagation();
        axios.delete("/api/list_grid/" + idNum).then(response => {
          let newArr = [];
            response.data.categories.forEach(val => {
                newArr.push(val.title)
            })
            this.setState({
                categoryNames: newArr,
                idNum: response.data.idNum,
                categoryData: response.data.categories
            })
        }).catch(err => {
          console.log(err)
        });
    }

    render(){
        let names = this.state.categoryNames.map((val, i) => {
            let id;
            this.state.categoryData.forEach(item => {
                if(item.title===val){
                    id = item.idNum
                }
            });
            return (
                // listName={val} gives us the category name, which is also the property key name in the main App.js categories object. This can help us access the proper array for the ShowWord 
                <ListCard id={id} key={i} listName={val} showWord={this.props.showWord} showCategoryEdit={this.props.showCategoryEdit} saveClickedCard={this.props.saveClickedCard} showEditList={this.props.showEditList} categoryData={this.state.categoryData} deleteList={this.deleteList}/>
            )
        });

        return (
            <div>
                <h1>PICK A CATEGORY</h1>
                <p>Choose a topic. Get your friends to guess the words!</p>
                <div className="list-grid">
                    {names}
                </div>
            </div>
        )
    }
}

export default ListGrid;