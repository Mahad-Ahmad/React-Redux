import "./App.css";
import HooksCakeContainer from "./components/hooksCakeContainer";
import HooksIcecreamContainer from "./components/hooksIcecreamContainer";
import { Provider } from "react-redux";
import UserContainerWithToolkit from "./components/userContainerWithToolkit";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainer";
import UserContainer from "./components/userContainer";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <UserContainerWithToolkit />
          {/* <UserContainer /> */}
          {/* <CakeContainer /> */}
          {/* <HooksCakeContainer /> */}
          {/* <HooksIcecreamContainer cake /> */}
        </div>
      </Provider>
    </>
  );
}

export default App;
