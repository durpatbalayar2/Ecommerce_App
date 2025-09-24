import { Route, Routes } from "react-router-dom";
import {Toaster} from 'sonner'
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"></Toaster>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route>{/*Admin Layout */} </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
