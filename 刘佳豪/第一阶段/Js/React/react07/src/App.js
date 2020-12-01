import { BrowserRouter } from "react-router-dom";
import BaseLayOut from "./Components/BaseLayOut";
import "./App";

import { Provider } from "react-redux";
import myStore, { persistor } from "./ReactRedux/store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <BaseLayOut></BaseLayOut>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
