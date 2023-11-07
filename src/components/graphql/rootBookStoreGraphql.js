import React from 'react';

import { Outlet } from 'react-router-dom';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'; 

const client = new ApolloClient({
    uri: "http://localhost:9999/graphql", // this is the endpoint for graphql on the backend application
    cache: new InMemoryCache()
})

function RootBookStoreGraphql() {
    return ( <div>
        <ApolloProvider client={client}>
            <Outlet></Outlet>
        </ApolloProvider>
    </div> );
}

export default RootBookStoreGraphql;