import React, { Component } from 'react';

function ListCard(props){
    let idNum = props.id;
    let listName = props.listName.toUpperCase();
    let editBtn;
    let deleteBtn;
    if(idNum>5){
        editBtn = <button className="edit-delete">Edit</button>;
        deleteBtn = <button className="edit-delete">Delete</button>
    }
    return (
        <div className="list-card" cardname={props.listName} onClick={() => {
            props.saveClickedCard(listName);
            props.showWord();
        }}>
            {editBtn}
            {deleteBtn}
            <p>{listName}</p>
        </div>
    )
}

export default ListCard;