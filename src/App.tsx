import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state: any) => state.count);
  console.log("count app", count);
  return (
    <Router>
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>cart: {count}</div>
        </div>
        <hr />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product" Component={Product} />
        </Routes>
      </div>
    </Router>
  );
}
