const graphql = require("graphql");

const blog_management_type = new graphql.GraphQLObjectType({
    name: "BlogManagementData",
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

module.exports = blog_management_type