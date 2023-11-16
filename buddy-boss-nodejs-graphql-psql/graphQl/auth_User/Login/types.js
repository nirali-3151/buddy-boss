const graphql = require("graphql");

const Login_User = new graphql.GraphQLObjectType({
    name: "Login_user",
    fields: {
        Token: { type: graphql.GraphQLString },
        msg:{type: graphql.GraphQLString}
    }
});

module.exports = Login_User