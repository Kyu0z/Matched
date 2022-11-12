import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./modules/Header";
import Home from "./modules/Home/Home";
import Matched from "./modules/Matched/Matched";
import Message from "./modules/Message/Message";
import Profile from "./modules/Profile/Profile";
import { NotLogin } from "./pages/NotLogin";
import { NotFound } from "./pages/NotFound";
import { Logout } from "./pages/Logout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "./store/user/selecters";

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/matched" element={<Matched></Matched>}></Route>
                <Route path="/message" element={<Message></Message>}></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
                <Route path="/auth/logout" element={<Logout />}></Route>
                <Route path="*" element={<NotFound />} />
              </>
            ) : (
              <>
                <Route
                  path="/auth/sign-in"
                  element={<SignInPage></SignInPage>}
                ></Route>
                <Route
                  path="/auth/sign-up"
                  element={<SignUpPage></SignUpPage>}
                ></Route>
                <Route path="*" element={<NotLogin />} />
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
