import React from "react";
import Child1 from "./Component/Child1";

export const AppContext = React.createContext(1000);
const App = () => {
  return (
    <AppContext.Provider value={10}>
      <div>
        <h1>Parent</h1>
        <Child1 />
      </div>
     </AppContext.Provider>
  );
};

export default App;
