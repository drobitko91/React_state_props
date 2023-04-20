import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Banner from "../Banner/Banner";
import "./App.scss";
import Blog from "../Blog/Blog";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <div className="box">
        <Blog />
        <Aside />
      </div>
    </div>
  );
}

export default App;
