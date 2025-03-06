// import React from "react";

// const Profile = () => {
//   return (
//     <div className="container profile mt-5">
//       <h2>Profile Page</h2>
//       <p>User-specific information goes here.</p>
//     </div>
//   );
// };

// export default Profile;
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      {user ? (
        <>
          <p><strong>Username:</strong> {user.username}</p>
          <h4>Your Tasks:</h4>
          <ul className="list-group">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <li key={task.id} className="list-group-item">
                  {task.title}
                </li>
              ))
            ) : (
              <p>No tasks added yet.</p>
            )}
          </ul>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
