import React from 'react';
import { withRouter } from 'react-router-dom';
import ToastEditor from '../components/ToastEditor';


function EditPostPage(props) {


    return(
       <ToastEditor/>
    )
}

export default withRouter(EditPostPage);