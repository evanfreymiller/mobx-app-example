import "./App.css";
import { Provider, rootStore } from "./models/Root";
import BidPackageView from "./components/BidPackageView/components";
import BidPackageIndex from "./components/BidPackageIndex/components";

function App() {
  const column = {
    width: '50%',
    height: '100%',
    display: "flex",
    justifyContent: "center",

  }
  return (
    <Provider value={rootStore}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          height: window.innerHeight,
        }}
      >
        <div style={column}>
          <BidPackageIndex />
        </div>
        <div style={column}>
          <BidPackageView />
        </div>
      </div>
    </Provider>
  );
}

export default App;
