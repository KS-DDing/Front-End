// import React  from 'react';
// import Prism from 'prismjs';
// import 'codemirror/lib/codemirror.css'
// // 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
// import 'prismjs/themes/prism.css';

// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';

// import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// import 'tui-color-picker/dist/tui-color-picker.css';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

// export default function Writer(){
// 	return (
// 	<Editor
//       	previewStyle='vertical'
//       	plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
// 	/>
// 	);
// }

import React, {createRef} from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';

function Writer (){
  const editorRef = React.createRef();
  const handleClick = (e) => {
    e.preventDefault();
    const value = editorRef.current.getInstance().getMarkdown();
    // editorRef.current.getInstance().getHtml();
    console.log(value)

    let body = {
      title : '강병선 야발',
      content : value,
      author: '1',

    }
    axios.post('/api/post/',body).then(res => (console.log(res)));
    // console.log('editor.gethtml() : ' + editorRef.getHtml())
  };

  
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue="# 강병선"
          ref={editorRef}
        />
        <button onClick={handleClick}>Submit</button>
      </>
    );
  
}
export default Writer;
