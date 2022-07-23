import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import HomePage from "./pages/homepage/HomePage";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Post from "./pages/post/Post";
import CreatePost from "./pages/post/createPost/CreatePost";
import ShowPost from "./pages/post/showPost/ShowPost";
import EditPost from "./pages/post/editPost/EditPost";
import User from "./pages/user/User";
import UserDetails from "./pages/user/showUser/UserDetails";
import EditUser from "./pages/user/editUser/EditUser";
import NotFound from "./components/error/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="auth" element={<Auth />}>
            <Route path="" element={<NotFound />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="post" element={<Post />}>
            <Route path="" element={<NotFound />} />
            <Route path="create" element={<CreatePost />} />
            <Route path=":postId" element={<ShowPost />} />
            <Route path=":postId/edit" element={<EditPost />} />
          </Route>
          <Route path="user" element={<User />}>
            <Route path="" element={<NotFound />} />
            <Route path=":userId" element={<UserDetails />} />
            <Route path=":userId/edit" element={<EditUser />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
