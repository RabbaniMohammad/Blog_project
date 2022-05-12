import { About } from "./components/About";
import Category from "./components/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesList from "./components/articles/ArticlesList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/category" element={<Category />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/article" element={<ArticlesList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
