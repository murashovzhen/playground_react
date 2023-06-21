import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Post from "./Components/Forms/PostPage";
import SingIn from "./Components/Forms/SingInPage";
import SingUp from "./Components/Forms/SingUpPage";
import RegistrationConfirmation from "./Components/Forms/RegistrationConfirmationPage";
import Success from "./Components/Forms/SuccessPage";
import Home from "./Components/PostsIndex";
import { ActivatePage } from "./Components/Forms/ActivatePage/ActivatePage";
import AddPost from './Components/Forms/AddPostPage';
import SearchPosts from './Components/PostsSearch/index';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'post/:id'} element={<Post />} />
          <Route path='addPost' element={<AddPost />} />
          <Route path='singin' element={<SingIn />} />
          <Route path='singup' element={<SingUp />} />
          <Route path='registrationConfirmation' element={<RegistrationConfirmation />} />
          <Route path='activate' element={<ActivatePage />} />
          <Route path='success' element={<Success />} />
          <Route path='search' element={<SearchPosts />} />

          <Route path={RoutesConstants.PostsMy} element={<Home listType='myPosts' />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App;



