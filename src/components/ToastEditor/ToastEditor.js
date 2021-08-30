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

import React, { createRef, useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';

export function Writer(props) {

  const editorRef = React.createRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState();
  const [postData, setPostData] = useState('');

  useEffect(() => {
    const GetProfileAndPost = async () => {
      try {
        setError(null);
        setPostData('');
        setLoading(true);
        const response = await axios.get(`/api/posts/one/${props.postid}`);
        axios.get('/api/users/profile').then((req, res) => setState(req.data))
        setPostData(response.data);

      } catch (e) {
        setError(e)
      }
      setLoading(false);
    };
    GetProfileAndPost();
  }, [])

  if(loading) return <div>로딩중...</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!postData) return null;

  const profile = state

  console.log("props.postid : " + props.postid)
  console.log("유저 정보 : ")
  console.log(profile)
  console.log("포스트 정보 : ")
  console.log(postData)

  const handleClick = (e) => {

    e.preventDefault();

    const value = editorRef.current.getInstance().getMarkdown();
    // editorRef.current.getInstance().getHtml();
    console.log(value)
    let body = {
      postid: `${props.postid}`,
      title: '강병선 야발',
      content: value,
      author: profile.id,
    }
    console.log(body)
    axios.post('/api/post/edit', body).then(res => (console.log(res)));
    // console.log('editor.gethtml() : ' + editorRef.getHtml())
  };

  return (
    <>
      <Editor
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        initialValue={postData.content}
        ref={editorRef}
      /> 
      <button onClick={handleClick}>Submit</button>
    </>
  );

}
export default Writer;
