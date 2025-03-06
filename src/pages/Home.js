// import React from "react";

// const Home = () => {
//   return (
//     <div className="container home mt-5">
//       <h1>Welcome to the Task Management App</h1>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="container mt-5 text-center">
      <h2>Welcome to Task Manager</h2>
      {user ? (
        <h4 className="mt-3">Hello, <span className="text-primary">{user.username}</span>! 👋</h4>
      ) : (
        <h4 className="mt-3">Please log in to manage your tasks.</h4>
      )}
    </div>
  );
};

export default Home;
