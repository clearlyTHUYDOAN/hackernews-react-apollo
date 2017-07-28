import React, { Component } from 'react';
import Link from './Link';

class LinkList extends Component {
    render() {

        const linksToRender = [{
            id: '1',
            description: 'The Coolest GraphQL Backend 😎',
            url: 'https://www.graph.cool'
            }, {
            id: '2',
            description: 'The Best GraphQL Client',
            url: 'http://dev.apollodata.com/'}]

        return (
            <div>
                {linksToRender.map(link => (
                    <Link key={link.id} link={link}/>
                ))}
            </div>
        )
    }
}

export default LinkList;

// When using Apollo, you've got two ways of sending queries to the servier.

/* 1) Use the query method on the ApolloClient directly. This is a more imperative way of fetching data
and will allow you to process the response as a promise i.e. like Axios.

client.query({
  query: gql`
    query AllLinks {
      allLinks {
        id
      }
    }
  `
}).then(response => console.log(response.data.allLinks)) */

/* 2) A more idiomatic way when using React, however, is to use Apollo's HOC graphql to wrap your
React component with a query. 

With this approach all you need to do when it comes to fetching data is write the GraphQL query and graphql
will fetch the data for you under the hood and then make it available in your component's props.

In general, the process for you to add some data fetching logic will be very similar every time:

i) write the query as a JS constant using the gql parser function
ii) use the graphql container to wrap your component with the query
iii) access the query results in the component's props */

const ALL_LINKS_QUERY = gql`
  # 2
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList);