import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Start from "./pages/Start";
import FullItems from "./pages/FullItems";
import All from "./pages/All";
import { useStoreState } from "easy-peasy";

function App() {
  const navigate = useNavigate();
  const user = useStoreState((state) => state.user);

  useEffect(() => {
    if (!Object.keys(user).length) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all" element={<All />} />

        <Route path="/fullitems" element={<FullItems />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
