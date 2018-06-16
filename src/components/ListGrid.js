import React, { Component } from 'react';
import axios from 'axios';
import ListCard from './ListCard'

class ListGrid extends Component{
    constructor(){
        super();
        this.state = {
            categoryNames: []
        }
    }
    componentDidMount(){
        axios.get("/api/list_grid").then(response => {
            let newArr = [];
            for(let key in response.data){
                newArr.push(key)
            }
            this.setState({
                categoryNames: newArr
            })
            console.log(this.state.categoryNames)
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        let names = this.state.categoryNames.map((val, i) => {
            return (
                // listName={val} gives us the category name, which is also the property key name in the main App.js categories object. This can help us access the proper array for the ShowWord 
                <ListCard key={i} listName={val} showWord={this.props.showWord} saveClickedCard={this.props.saveClickedCard}/>
            )
        });

        return (
            <div>
                <h1>PICK A CATEGORY</h1>
                <p>Choose a topic and start guessing!</p>
                <div className="list-grid">
                    {names}
                </div>
            </div>
        )
    }
}

export default ListGrid;