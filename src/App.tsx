import styles from "./App.module.scss";
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Body from "./Components/Body";
import Post from "./Components/Post";
import SingIn from "./Components/SingIn";
import PostEdit from "./Components/PostEdit";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Body />} />
        <Route path='posts/:id' element={<Post />} />
        <Route path='posts/edit/:id' element={<PostEdit />} />
        <Route path='posts/create' element={<PostEdit />} />
        <Route path='singin' element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
