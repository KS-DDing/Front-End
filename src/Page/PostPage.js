import React from 'react';
import { withRouter } from 'react-router-dom';
import ToastEditor from '../components/ToastEditor';
function PostPage(props) {

    return(
       <ToastEditor/>
    )
}

export default withRouter(PostPage);