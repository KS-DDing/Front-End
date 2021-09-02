import React, { useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';

function Create(props) {

    console.log(props)

    const editorRef = React.createRef();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [state, setState] = useState();

    useEffect(() => {
        try {
            setError(null);
            setState('');
            setLoading(true);
            // const response = await axios.get(`/api/posts/one/${props.postid}`);
            // axios.get('/api/users/profile').then((req, res) => setState(req.data))
            setState(props.location.state);
        } catch (e) {
            setError(e)
        }
    }, [props.location.state])

    console.log(state)
    //   if(loading) return <div>로딩중...</div>
    //   if(error) return <div>에러가 발생했습니다.</div>
    //   if(!state) return null;

    const handleClick = (event,data) => {
        event.preventDefault();
        const value = editorRef.current.getInstance().getMarkdown();
        console.log("글 내용")
        console.log(value)

        // post api로 보내는 폼 데이터 정보
        let body = {
            title: "data.title",
            content: value,
            author: state.id
        }
        // 작성한 글 데이터를 api로 요청 데이터 전송
        axios.post('/api/post/', body).then(res => (console.log(res)));

        props.history.push(`/personal/${state.id}`)
        window.location.reload()
    };


    return (
        <>
            <form style={{ display: 'flex', flexDirection: 'column', margin: "2em"}} onSubmit={handleClick}>
                <label >title</label>
                <input type="text" />
                <label>hashTag</label>
                <input></input>
                <Editor
                    previewStyle="vertical"
                    height="400px"
                    initialEditType="markdown"
                    initialValue="글 새로 작성하기"
                    ref={editorRef}
                />
                <button style={{marginTop: "1em"}}type="submit">Submit</button>
            </form>
        </>
    );

}
export default Create;