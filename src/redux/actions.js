// src/redux/actions.js
export const login = (username, password) => (dispatch) => {
    // Hard-coded credentials
    const credentials = [
      { username: "admin", password: "admin@123"},
      { username: "afiya", password: "afiya@123" },
    ];
    
    const user = credentials.find(
      (cred) => cred.username === username && cred.password === password
    );
    
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } else {
      dispatch({ type: "LOGIN_FAIL" });
      alert("Invalid credentials");
    }
  };
  
  export const logout = () => (dispatch) => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  
  // export const checkAuth = () => (dispatch) => {
  //   // Force a re-login on application start by ensuring localStorage is cleared.
  //   localStorage.removeItem("user");
  //   dispatch({ type: "LOGIN_FAIL" });
  // };
  export const checkAuth = () => (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } else {
      dispatch({ type: "LOGIN_FAIL" });
    }
  };
  
  export const loadTasks = () => (dispatch) => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch({ type: "LOAD_TASKS", payload: storedTasks });
  };
  
  
  
