import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// required dependencies from react-apollo package
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

// create network interface. 
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj5obx1i6w8gr0122e7lqrur6'
})

// instantiate apollo client by passing in the network interface
const client = new ApolloClient({
  networkInterface
})

// render root component of react app. 
// app is wrapped with the HOC apollo provider that gets passed the client as a prop
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
)

registerServiceWorker();
