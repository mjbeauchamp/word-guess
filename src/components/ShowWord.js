import React, {Component} from 'react';

class ShowWord extends Component {
    constructor(){
        super()
        this.state = {
            currentWord: "",
            wordArr: [],
            teamOne: 0,
            teamTwo: 0,
            gameWon: false,
            winningTeam: ""
        }
    }

    teamOnePoint = () => {
        let newWord = this.newRandomWord();
        let num = this.state.teamOne + 1;
        console.log(num)
        if(num<5){
            this.setState({
                teamOne: num,
                currentWord: newWord
                
            })
        } else {
            this.setState({
                gameWon: true,
                winningTeam: "Team 1",
                teamOne: 0,
                teamTwo: 0
            })
        }
      }
    
      teamTwoPoint = () => {
        let newWord = this.newRandomWord();
        let num = this.state.teamTwo + 1;
        if(num<5){
            this.setState({
                teamTwo: num,
                currentWord: newWord
            })
        } else {
            this.setState({
                gameWon: true,
                winningTeam: "Team 2",
                teamOne: 0,
                teamTwo: 0
            })
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
        this.setState({
            currentWord: word
        })
        console.log(this.state.currentWord)
    }

    newRandomWord = () => {
        let arrayLength = this.state.wordArr.length;
        let num = Math.floor(Math.random() * arrayLength);
        let word = this.state.wordArr[num];
        return word;
    }

    playAgain = () => {
        let newWord = this.newRandomWord();
        this.setState({
            currentWord: newWord,
            teamOne: 0,
            teamTwo: 0,
            gameWon: false,
            winningTeam: ""
        })
    }

    render(){
        let winMessage;
        if(this.state.gameWon){
            winMessage = <div><p>{this.state.winningTeam} won the game!</p><button onClick={this.playAgain}>Play This Category Again?</button></div>
        } 
        return (
            <div>
                {winMessage}
                <div className="score-box">
                    <p>Team 1 Points: {this.state.teamOne}</p>
                    <p>Team 2 Points: {this.state.teamTwo}</p>
                </div>
                <div className="show-word">
                    <p>{this.state.currentWord}</p>
                </div>
                <button className="team-btn" onClick={() => {
                    this.teamOnePoint();
                    this.newRandomWord();
                }}>Point for Team 1</button>
                <button className="team-btn" onClick={() => {
                    this.teamTwoPoint();
                    this.newRandomWord();
                }}>Point for Team 2</button>
                {/* <button onClick={this.newRandomWord}>NEXT</button> */}
            </div>
        )
    }
}

export default ShowWord;

