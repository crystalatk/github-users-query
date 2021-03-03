import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardImage, Image  } from 'bloomer';
import { Column } from "bloomer/lib/grid/Column";

const UserCard = (props) => {
    const { user } = props;
    const { url } = useRouteMatch();
    console.log(user);
    console.log(url);

    return (
        <Column >
            <Card className="card-styles">
                <Link to={`${url}${user.login}`}>
                    <CardHeader className="has-text-info is-size-3 center-text">{user.name}</CardHeader>
                    <CardImage>
                        <Image isRatio='5x3' src={user.avatar_url} alt="User's headshot"/>
                    </CardImage>
                </Link>
            </Card>
        </Column> 
    )
}

export default UserCard;