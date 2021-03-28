import React from 'react';
import Footer from "./components/Footer";
import Content from './components/Content';
import Header from './components/Header';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
