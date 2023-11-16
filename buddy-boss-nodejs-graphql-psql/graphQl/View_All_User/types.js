const graphql = require("graphql");

const viewAllUser = new graphql.GraphQLObjectType({
    name: "viewAllUser",
    fields: {
        blog_manage_id: { type: graphql.GraphQLID },
        title: { type: graphql.GraphQLString },
        description:{ type: graphql.GraphQLString },
        radio_btn_select:{ type: graphql.GraphQLString},
        updated_at:{ type: graphql.GraphQLString},
        user_id:{ type: graphql.GraphQLID},
        catagory_name:{ type: graphql.GraphQLString},
        name:{ type: graphql.GraphQLString},
        thumbnail_img:{ type: graphql.GraphQLString},
    }
});

module.exports = viewAllUser