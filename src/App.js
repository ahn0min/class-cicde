import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Header } from "./Header";
import { Nav } from "./Nav";
import { Article } from "./Article";

// React Store
function reducer(state, action) {
  if (state === undefined) {
    return {
      topics: [],
    };
  }
  const newState = { ...state };
  return newState;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <Header></Header>
        <Nav></Nav>
        <Article></Article>
      </Provider>
    </div>
  );
}
export default App;
