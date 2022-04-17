import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import {Route, Routes, Navigate} from "react-router-dom";
import EditPostForm from "./features/posts/EditPostPage";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<PostsList/>}/>
                <Route path="post">
                    <Route index element={<AddPostForm/>}/>
                    <Route path=":postId" element={<SinglePostPage/>}/>
                    <Route path="edit/:postId" element={<EditPostForm/>}/>
                </Route>
                <Route path={'user'}>
                    <Route index element={<UsersList/>}/>
                    <Route path=':userId' element={<UserPage/>}/>
                </Route>

            </Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
            {/*<Route path="*" element={<h1 style={styles.container}>404</h1>}/>*/}

        </Routes>
    );
}

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '80vh'
//     }
// }


export default App;
