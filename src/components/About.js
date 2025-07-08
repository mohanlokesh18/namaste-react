import ContactUs from "./ContactUs";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component mount");
  }

  componentWillUnmount() {
    // console.log("component unmounded");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-container">
        <h1>Hare Krishna! Welcome to About page</h1>
        <UserClass name={"Hare Krishna"} location={"Bengaluru"} />
      </div>
    );
  }
}
export default About;
