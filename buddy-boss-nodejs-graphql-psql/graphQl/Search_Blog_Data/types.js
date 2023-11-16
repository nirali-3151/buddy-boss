const graphql = require("graphql");

const main_blog_check_type = new graphql.GraphQLObjectType({
    name: "main_blog_check",
    fields: {
        blog: { type: graphql.GraphQLString },
    }
});

module.exports = main_blog_check_type