import React from "react";
import Child1 from "./Component/Child1";

export const AppContext = React.createContext();

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
      <AppContext.Provider value={"Good evening"}>
        <Child1 />
      </AppContext.Provider>
    </div>
  );
};

export default App;
