const graphql = require("graphql");

const Register_User = new graphql.GraphQLObjectType({
    name: "Register",
    fields: {
        msg:{ type: graphql.GraphQLString},
        auth_id: { type: graphql.GraphQLID },
        name: { type: graphql.GraphQLString },
        email: { type: graphql.GraphQLString },
        password: { type: graphql.GraphQLString },
    }
});

module.exports = Register_User