const UserCard = (props) => {
    const { user } = props;
    console.log(user);

    return (
        <li>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="User's headshot"/>
            <p>{user.bio}</p>
        </li>
    )
}

export default UserCard;