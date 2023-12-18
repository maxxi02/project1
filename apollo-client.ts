import { ApolloClient, InMemoryCache } from '@apollo/client';



const getClient = () => {

    const client = new ApolloClient({
        uri: process.env.API_URL!,
        cache: new InMemoryCache(),
        headers:
        {
            Authorization: `apikey ${process.env.API_KEY!}`
        }
    });

    
    return client;
}

export default getClient;