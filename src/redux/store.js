// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk"; // This will now work as a default import
// import rootReducer from "./reducers";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { loadTasks } from "./actions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(loadTasks()); // Load tasks from localStorage on app start

export default store;
