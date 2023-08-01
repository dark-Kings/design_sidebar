import Slidebar from "./components/Slidebar";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Chat from "./pages/Chat";


const App = () => {


  return (
    <>
      <BrowserRouter>
     <Slidebar>
     <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
      </Slidebar>
      </BrowserRouter>
    </>
  );
};
export default App;