import react, {useEffect, useState} from 'react';
import axios from 'axios';
import { set } from 'react-hook-form';
function Profile(props) {
    // const { email, password, name } = props || {};
    // console.log(props)
    useEffect(() => {
        axios.get('/api/users/profile').then(res =>setState(res.data))
       
    }, [])
    const [state, setState] = useState("")
    

    return (
        <>
        <h1>Profile</h1>
        <dt>Email</dt>
        <dd>{state.email}</dd>
        <dt>Name</dt>
        <dd>{state.name}</dd>
        </>
    );
}

export default Profile;