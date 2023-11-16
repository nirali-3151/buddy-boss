const graphql = require("graphql");

const Catagory_type = new graphql.GraphQLObjectType({
    name: "blog_catagory",
    fields: {
        blog_catagory_id: { type: graphql.GraphQLID },
        catagory_name: { type: graphql.GraphQLString },
        user_auth_id: { type: graphql.GraphQLString },
    }
});

module.exports = Catagory_type