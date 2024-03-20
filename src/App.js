import React from "react";
import Header from "./components/header.jsx";
// import Footer from "./components/footer.jsx";
import MainContent from "./components/mainContent.jsx";
import NavBar from "./components/navbar.jsx";
// import MainContent 

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
