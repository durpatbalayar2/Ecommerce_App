import { Route, Routes } from "react-router-dom";
import {Toaster} from 'sonner'
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { BrowserRouter } from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import DemoHome from "./pages/DemoHome";
import Collection from "./pages/Collection";

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"></Toaster>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<DemoHome />} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="collection" element={<Collection/>}/>
        </Route>

        <Route>{/*Admin Layout */} </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
