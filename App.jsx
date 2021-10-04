import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Post from './components/post';
function App() {
  return (
    <div className="App">
       <Navbar />
       <div>
         <Sidebar />
       </div>
       <div>
         <Post />
       </div>
    </div>
  );
}
export default App;
