import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { username } = useParams();
    const [repoList, setRepoList] = useState([]);
    useEffect(() => {
        (async function() {
            const url =  `https://api.github.com/users/${username}/repos`;
            const userInfo = await fetch(url)
                .then(response => response.json());
            console.log('USERINFO: ', userInfo);
            setRepoList(userInfo);
        })();
    }, [setRepoList, username]);
    
    return (
        <>
            <h1>{username}</h1>
            {repoList.map((repo) => (
                <p key={repo.id}>{repo.name}</p>
        ))}
        </>
    )
}

export default UserProfile;