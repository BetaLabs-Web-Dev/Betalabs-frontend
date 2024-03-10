import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

class Layout extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
