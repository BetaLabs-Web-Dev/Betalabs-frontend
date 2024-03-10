import React from "react";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

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
