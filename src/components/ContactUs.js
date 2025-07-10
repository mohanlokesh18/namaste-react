import useOnlineStatus from "../utils/useOnlineStatus";
import TicTacToe from "../utils/OfflineGame";
import { useContext } from "react";
import userContext from "../utils/userContext";
const ContactUs = () => {
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(userContext);
  return onlineStatus ? (
    <div className="m-2 p-2">
      <h1 className="mb-4">
        Hey {userName} feel free to send your thoughts.💭
      </h1>
      <form className="flex gap-10">
        <input className="border-2 rounded-md p-0.5" placeholder="name"></input>
        <input
          className="border-2 rounded-md p-0.5"
          placeholder="message"
        ></input>
        <button className="border-2 rounded-md p-0.5 bg-green-300">
          Submit
        </button>
      </form>
    </div>
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
