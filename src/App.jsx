
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<h1>contact</h1>} />
            {/* <Route path="/addPages" element={<AddPage/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
