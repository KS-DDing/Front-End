import React from 'react';
import { withRouter } from 'react-router-dom';
import ToastEditor from '../components/ToastEditor/ToastEditor';


function EditPostPage(props) {

    console.log(props)
    return(
       <ToastEditor postid={props.match.params.postid}/>
    )
}

export default withRouter(EditPostPage);