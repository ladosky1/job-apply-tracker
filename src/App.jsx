import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import MyJobs from "./pages/MyJob";
import AppLayout from "./layout/AppLayout";

function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/myjobs" element={<MyJobs />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;