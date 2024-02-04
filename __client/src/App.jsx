import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Feed";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/Feed";
import Feed from "./pages/Feed";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Forum from "./pages/forum/Forum";
import Events from "./pages/Events";
import Page404 from "./pages/Page404";
import DiscussionPage from "./pages/DiscussionPage";
import User from "./pages/User";
import Explore from "./pages/Explore";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><Feed/><Footer/></>}/>
        <Route path="/forum" element={<><Navbar/><Forum/><Footer/></>}/>
        <Route path="/events" element={<><Navbar/><Events/><Footer/></>}/>
        <Route path="/signin" Component={SignIn}/>
        <Route path="/signup" Component={SignUp}/>
        <Route path="/explore" element={<><Navbar/><Explore/><Footer/></>}/>
        <Route path="/discussion/:id" element={<><Navbar/><DiscussionPage/><Footer/></>}/>
        <Route path="/user/:id" element={<><Navbar/><User/><Footer/></>}/>
        <Route path="/*" Component={Page404}/>
      </Routes>
    </Router>
  );
}

export default App
