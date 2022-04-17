import {useSelector} from "react-redux";
import {selectUserById} from "./usersSlice";
import {selectPostsByUser} from "../posts/postsSlice";
import {Link, useParams} from "react-router-dom";

const UserPage = () => {
    const {userId} = useParams();
    const user = useSelector(state => selectUserById(state, +userId));
    const postsForUser = useSelector(state => selectPostsByUser(state, +userId));

    const postTitles = postsForUser.map(post =>
        <li>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    )

    if (!user) {
        return <div>User not found</div>
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <ol>{postTitles} </ol>
        </div>
    )
};

export default UserPage;
