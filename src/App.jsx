import "./App.css";
import Navbar from "./components/Navbar";
import Track from "./components/Track";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Report from "./components/Report";
import Help from "./components/Help";
// import Error from "./components/Error"



function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>

        <Routes>

          <Route path="/" element={<Track/>}/>
          <Route path="report" element={<Report/>}/>
          <Route path="help" element={<Help/>}/>
         {/* <Route path="*" element={Error} /> */}
        </Routes>
       
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
