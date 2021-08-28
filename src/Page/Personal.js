import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import MyPost from '../view/Post/MyPosts'
function PersonalPage({match}) {
    console.log(match.params)
    return(
        <div>
            <MyPost id={match.params}/>
        </div>
        
        
    )
}

export default withRouter(PersonalPage);