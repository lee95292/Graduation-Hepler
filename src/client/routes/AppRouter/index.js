import React, { Component, Children } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import history from "../history";
import AdminRequirementPage from "../../pages/admin/requirements";
import MainRequirementsPage from "../../pages/main/requirements";
import AccountPage from "../../pages/account";

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
    };
  }
  componentDidMount() {
    axios.get("/api/auth/check").then((res) => {
      if (res.data.result) {
        this.setState({ auth: true });
      }
    });
  }
  render() {
    const PrivateRoute = (children) => (
      <Route
        render={() =>
          this.state.auth ? (
            Children
          ) : (
            <Route exact path="/account" component={AccountPage} />
          )
        }
      />
    );
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute>
              <Route exact path="/" component={MainRequirementsPage} />
            </PrivateRoute>
            <Route path="/main/requirements" component={MainRequirementsPage} />

            <Route exact path="/account" component={AccountPage} />

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
