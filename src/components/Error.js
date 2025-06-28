import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops!!!</h1>
      <h2>Something went wrong!</h2>
      <p>{error.status} - {error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
