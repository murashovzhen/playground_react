import styles from "./App.module.scss";
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Body from "./Components/Body";
import Post from "./Components/Post";
import SingIn from "./Components/SingIn";
import PostEdit from "./Components/PostEdit";
import SingUp from "./Components/SingUp";
import ResetPass1 from "./Components/Reset password1";
import ResetPass2 from "./Components/Reset password2";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Body />} />
        <Route path='posts/:id' element={<Post />} />
        {/* <Route path='posts/edit/:id' element={<PostEdit />} />
        <Route path='posts/create' element={<PostEdit />} /> */}
        <Route path='singin' element={<SingIn />} />
        <Route path='singup' element={<SingUp />} />
        <Route path='resetpass1' element={<ResetPass1 />} />
        <Route path='resetpass2' element={<ResetPass2 />} />
      </Route>
    </Routes>
  )
}

export default App;



