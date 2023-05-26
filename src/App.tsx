import styles from "./App.module.scss";
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Body from "./Components/Body";
import Post from "./Components/Forms/Post";
import SingIn from "./Components/Forms/SingIn";
import PostEdit from "./Components/Forms/PostEdit";
import SingUp from "./Components/Forms/SingUp";
import ResetPass1 from "./Components/Forms/Reset password1";
import ResetPass2 from "./Components/Forms/Reset password2";
import NewPass from "./Components/Forms/New Password";
import SingUpNewPass from "./Components/Forms/SingUp New Pass";
import RegistrationConfirmation from "./Components/Forms/Registration Confirmation";
import Success from "./Components/Forms/Success";

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
        <Route path='newpass' element={<NewPass />} />
        <Route path='singinNewpass' element={<SingUpNewPass />} />
        <Route path='registrationConfirmation' element={<RegistrationConfirmation />} />
        <Route path='success' element={<Success />} />
      </Route>
    </Routes>
  )
}

export default App;



