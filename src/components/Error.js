import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops!..💔</h1>
      <h2>Something went wrong!</h2>

      {error ? (
        <>
          <p>
            {error.status} - {error.statusText || error.message}
          </p>
        </>
      ) : (
        <p>Unexpected error occurred.</p>
      )}
    </div>
  );
};

export default Error;
