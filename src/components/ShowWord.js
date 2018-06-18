import React, {Component} from 'react';

class ShowWord extends Component {
    constructor(){
        super()
        this.state = {
            currentWord: "",
            wordArr: []
        }
    }

    componentDidMount(){
        let thisCategoryName = this.props.clickedCard;
        let categoryWordArray = [];
        this.props.categories.forEach(val => {
            if(val.title===thisCategoryName){
                val.list.forEach(val => {
                    categoryWordArray.push(val)
                });
            }
        })
        console.log(this.props.categories)
        console.log(this.props.clickedCard)
        console.log(categoryWordArray)
        this.setState({
            wordArr: categoryWordArray
        })
        this.firstRandomWord(categoryWordArray)
        console.log()
    }

    firstRandomWord = (arr) => {
        let arrayLength = arr.length;
        let num = Math.floor((Math.random() * arrayLength));
        let word = arr[num];
        console.log(word, num)
        this.setState({
            currentWord: word
        })
        console.log(this.state.currentWord)
    }

    newRandomWord = () => {
        let arrayLength = this.state.wordArr.length;
        let num = Math.floor(Math.random() * arrayLength);
        let word = this.state.wordArr[num];
        console.log(word, num)
        this.setState({
            currentWord: word
        })
        console.log(this.state.currentWord)
    }

    render(){
        return (
            <div>
                <div className="show-word">
                    <p>{this.state.currentWord}</p>
                </div>
                <button onClick={this.newRandomWord}>NEXT</button>
            </div>
        )
    }
}

export default ShowWord;

