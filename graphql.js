const {ApolloServer, gql} = require("apollo-server-lambda");
const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const typeDefs = gql`
	type Query {
		user: User
	}

	type User {
		id: ID
		name: String
	}
`;

const resolvers = {
	Query: {
		user: () => ({id: 123, name: "Shadab"}),
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

exports.handler = server.createHandler();
