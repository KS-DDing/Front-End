import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

function PersonalPage(props) {
    console.log(props)
    return(
        "로그인시 개인화면"
    )
}

export default withRouter(PersonalPage);