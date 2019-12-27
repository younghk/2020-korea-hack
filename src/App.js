import React from "react";
import { Switch, Route } from "react-router-dom";
import SwitchRoutes from "./routes";

function App() {
  const routes = (
    <Switch>
      {SwitchRoutes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            exact={prop.exact}
            key={key}
          />
        );
      })}
    </Switch>
  );
  return <div>{routes}</div>;
}

export default App;
