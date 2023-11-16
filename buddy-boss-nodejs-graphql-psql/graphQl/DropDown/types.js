const graphql = require("graphql");

const blog_catagory_dropdown = new graphql.GraphQLObjectType({
    name: "blog_catagory_dropdown",
    fields: {
        blog_catagory_id: { type: graphql.GraphQLID },
        catagory_name: { type: graphql.GraphQLString },
        user_auth_id: { type: graphql.GraphQLString },
    }
});

module.exports = blog_catagory_dropdown