// HomePage.js
import React from "react";
import CallToAction from "./CallToAction";
import Specializations from "./Specializations";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import "./HomePage.css";

function HomePage() {
  return (
    <main>
      <CallToAction />
      <Specializations />
      <CustomersSay />
      <Chicago />
    </main>
  );
}

export default HomePage;