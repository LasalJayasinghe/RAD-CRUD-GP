import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
// import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import HomePage from "./components/home.js";
import Edit from "./components/edit";
import Create from "./components/create";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<HomePage />} /> 
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/recordList" element={<RecordList />} />
     </Routes>
   </div>
 );
};
 
export default App;