import './App.css';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { logo } from './images/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//Created constructor for apollo client
const client = new ApolloClient({
  uri: '/graphql', // http://localhost:5000/graphql
  /* 
  Apollo Client stores the results of its GraphQL queries in a normalized, in-memory cache. 
  This enables your client to respond to future queries for the same data without sending unnecessary network requests.
  */
  cache: new InMemoryCache()
});

function App() {
  return (
    // Wrapping container to Apollo Provider
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: 'block', margin: 'auto' }} />
          <Route exact path="/"  component={Launches}/>
          <Route exact path="/launch/:flight_number"  component={Launch}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
