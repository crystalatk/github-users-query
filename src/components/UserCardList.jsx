import { Columns } from 'bloomer';
import UserCard from "./UserCard";

const UserCardList = (props) => {
    const { usersArray } = props;


    return (
        <Columns >
            {usersArray.map((user, index) => {
                return <UserCard user={user} key={index}/>;
            })}
        </Columns >
    )
}

export default UserCardList;