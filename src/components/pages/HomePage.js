import React from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const HomePage = (props) => {
  return (
    <div>
      <Header content={props.content} />
      <Body content={props.content} />
      <Footer />
    </div>
  );
};

export default HomePage;
