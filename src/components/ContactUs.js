import useOnlineStatus from "../utils/useOnlineStatus";
import TicTacToe from "../utils/OfflineGame";
const ContactUs = () => {
  const onlineStatus = useOnlineStatus();
  return onlineStatus ? (
    <>
      <h1>Radhe Radhe! Welcome to Contact us page</h1>
      <h1>Radhe Radhe! Welcome to Contact us page</h1>
    </>
  ) : (
    <TicTacToe />
  );
};
export default ContactUs;

// import React from "react";

// class ContactUs extends React.Component {
//   constructor(props) {
//     console.log("ContactUs Child Constructor");

//     super(props);

//     this.state = {
//       count: 0,
//       count1: 1,
//     };
//   }

//   componentDidMount() {
//     console.log("ContactUs Child Component Mount");
//   }
//   render() {
//     console.log("ContactUs Child Render");

//     return (
//       <div>
//         <h2>Name:{this.props.name}</h2>
//         <h3>Location:{this.props.location}</h3>
//         <h3>Contact:</h3>
//         <h3>count:{this.state.count}</h3>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Increment Count
//         </button>
//         <h3>count1:{this.state.count1}</h3>
//       </div>
//     );
//   }
// }
// export default ContactUs;
