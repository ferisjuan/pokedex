var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var useRouterHistory = ReactRouter.useRouterHistory;
var CreateHashHistory = require('history/lib/createHashHistory')

var appHistory = useRouterHistory(CreateHashHistory)({
  queryKey: false
});

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Pokedex.jsx');
var Page2 = require('./components/Pokemon.jsx');

var Routes = (
  <Router history={appHistory}>
    <Route path="/" component={Base}>
      <Route path="/pokedex" component={Page1}/>
      <Route path="/pokemon" component={Page2}/>
    </Route>
  </Router>
);

module.exports = Routes;
