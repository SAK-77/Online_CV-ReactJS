import "./Github.css";
import { useEffect, useState } from 'react'

export default function Github() {
    const [user, setUser] = useState("");
    const [follower, setFollower] = useState([]);
    const [following, setFollowing] = useState([]);

    const getUser = async() => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    }

    const getFollower = async() => {
        const res = await fetch("https://api.github.com/users/github-john-doe/followers")
        const json = await res.json();
        setFollower(json);
    }

    const getFollowing = async() => {
        const res = await fetch("https://api.github.com/users/sjodiel/following{/other_user}")
        const json = await res.json();
        setFollowing(json);
    }

    useEffect(() => {
        getUser();
        getFollower();
        getFollowing();
    },[])

    return(
        <main className="github-page">
            <h1>Github user</h1>
            <h2>{user.name}</h2>
            <img src={user.avatar_url} alt={user.name}/>
            <p>{user.bio}</p>
            <p>Abonnés: {follower.length}</p>
            <p>Abonnement: {following.length}</p>
            <p>Créé le : {user.created_at}</p>
            <p>Modifié le : {user.updated_at}</p>
            <p>URL repositories : <a href={user.repos_url} target="_blank" rel="noreferrer">{user.repos_url}</a></p>
        </main>
    )
}