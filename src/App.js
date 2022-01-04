import { BrowserRouter, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import ChatRoom from "./screens/ChatRoom/ChatRoom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Route path="/" exact={true} component={LandingPage} exact />
        {/* exact={true} */}
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/chat" component={ChatRoom} exact />
      </main>
      <Footer />
      {/* <Navbar /> */}
    </BrowserRouter>
  );
}

export default App;
