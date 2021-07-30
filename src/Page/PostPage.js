import React from 'react';
import { withRouter } from 'react-router-dom';
import Editor from '@toast-ui/editor';
import 'codemirror/lib/codemirror.css'; // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

function PostPage(props) {
    // const editor = new Editor({
    //     el: document.querySelector('#editor'),
    //     height: '500px',
    //     initialEditType: 'markdown',
    //     previewStyle: 'vertical'
    //   });
    //   const html = (editor.getHtml("# hello"));
      
    return(
        <div id="editor"></div>
        

    )
}

export default withRouter(PostPage);