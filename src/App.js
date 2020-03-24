import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import { rootReducer } from "./component/redux/rootReducer";
import Page from "./component/Page";

const store = createStore(rootReducer, compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))



function App() {
  return (
    <Provider store={store}>
      <Page /> 
    </Provider>
  );
}

export default App;
