import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { Bookmark } from "./views/Bookmark";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      {/* 동적 라우팅 */}
      <Route path="/search/:id" element={<HomePage />}></Route>
      <Route path="/bookmark" element={<Bookmark/>}></Route>
    </Routes>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App