import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Post from "./Components/Forms/PostPage";
import SingIn from "./Components/Forms/SingInPage";
import SingUp from "./Components/Forms/SingUpPage";
import ResetPass1 from "./Components/Forms/ResetPasswordPage1";
import ResetPass2 from "./Components/Forms/ResetPasswordPage2";
import NewPass from "./Components/Forms/NewPasswordPage";
import SingUpNewPass from "./Components/Forms/SingUpNewPassPage";
import RegistrationConfirmation from "./Components/Forms/RegistrationConfirmationPage";
import Success from "./Components/Forms/SuccessPage";
import Home from "./Components/Body";
import { ActivatePage } from "./Components/Forms/ActivatePage/ActivatePage";
import AddPost from './Components/Forms/AddPostPage';
import SearchPage from './Components/Body/SearchPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='post/:id' element={<Post />} />
          {/* <Route path='posts/edit/:id' element={<PostEdit />} /> */}
          <Route path='addPost' element={<AddPost />} />
          <Route path='singin' element={<SingIn />} />
          <Route path='singup' element={<SingUp />} />
          <Route path='resetpass1' element={<ResetPass1 />} />
          <Route path='resetpass2' element={<ResetPass2 />} />
          <Route path='newpass' element={<NewPass />} />
          <Route path='singinNewpass' element={<SingUpNewPass />} />
          <Route path='registrationConfirmation' element={<RegistrationConfirmation />} />
          <Route path='activate/:uid/:token' element={<ActivatePage />} />
          <Route path='success' element={<Success />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
    </>

  )
}

export default App;



