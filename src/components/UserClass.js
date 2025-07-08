import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: "Mohan",
        location: "India",
        // contact: "Insta- mohan.lokesh.19",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Mount");

    const respons = await fetch("https://api.github.com/users/mohanlokesh18");
    const json = await respons.json();

    this.setState({
      userData: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userData;
    // console.log(this.props.name + "Child Render");

    return (
      <div>
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact:</h3>
      </div>
    );
  }
}
export default UserClass;
