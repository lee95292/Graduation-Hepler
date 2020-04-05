import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AdminRequirementPage from "../../pages/admin/requirements";
import MainRequirementsPage from "../../pages/main/requirements";
import AccountPage from "../../pages/account";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/main" component={MainRequirementsPage} />
            <Route path="/main/requirements" component={MainRequirementsPage} />

            <Route exact path="/admin" component={AdminRequirementPage} />
            <Route
              exact
              path="/admin/requirements"
              component={AdminRequirementPage}
            />

            <Route render={() => <div>404 not found</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppRouter;
