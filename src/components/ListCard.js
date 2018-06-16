import React, { Component } from 'react';

function ListCard(props){
    let listName = props.listName.toUpperCase();
    return (
        <div className="list-card" cardname={props.listName} onClick={() => {
            props.saveClickedCard(listName);
            props.showWord();
        }}>
            <p>{listName}</p>
        </div>
    )
}

export default ListCard;