var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var useRouterHistory = ReactRouter.useRouterHistory;
var CreateHashHistory = require('history/lib/createHashHistory')

var appHistory = useRouterHistory(CreateHashHistory)({
  queryKey: false
});

var Base = require('./routes/Base.jsx');
var Pokedex = require('./routes/Pokedex.jsx');
var Pokemon = require('./routes/Pokemon.jsx');

var Routes = (
  <Router history={appHistory}>
    <Route path="/" component={Base}>
      <Route path="/pokedex" component={Pokedex}/>
      <Route path="/pokemon" component={Pokemon}/>
    </Route>
  </Router>
);

module.exports = Routes;
