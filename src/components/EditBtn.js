import React from 'react';

function EditBtn(props){
    return(
        <i className="far fa-edit 2x edit-delete" onClick={e => props.showEditList(e, props.idNum, props.title, props.wordArr)}></i>
    )
}

export default EditBtn;