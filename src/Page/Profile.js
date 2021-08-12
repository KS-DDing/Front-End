import react, {useEffect, useState} from 'react';
import axios from 'axios';
import { set } from 'react-hook-form';
function Profile({match}) {
    // const { email, password, name } = props || {};
    // console.log(props)
    useEffect(() => {
        axios.get('/api/users/profile').then((req, res) =>setState(req.data))
       
    }, [])

    const [state, setState] = useState("")
    
    console.log(match)
    
    const id = match.params;
    const profile = state.id
    console.log(profile)
    return (
        <>
        <h1>Profile</h1>
        <dt>Email</dt>
        <dd>{state.email}</dd>
        <dt>Name</dt>
        <dd>{state.name}</dd>
        <h1>{match.param}</h1>
        <h2>id : {profile}</h2>
        </>
    );
}

export default Profile;