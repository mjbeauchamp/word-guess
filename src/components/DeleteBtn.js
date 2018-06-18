import React from 'react';

function DeleteBtn(props){
    return(
        <i className="far fa-trash-alt 2x edit-delete" onClick={e => props.deleteList(e, props.idNum, props.title)}></i>
    )
}

export default DeleteBtn;