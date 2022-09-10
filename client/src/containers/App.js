import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactNavbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const SPACE_LAUNCH_GRAPHQL_SERVER_URI = 'http://localhost:5000/graphql';

const client = new ApolloClient({
  uri: SPACE_LAUNCH_GRAPHQL_SERVER_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ReactNavbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
