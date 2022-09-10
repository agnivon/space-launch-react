const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLSchema
} = graphql;

const LAUNCH_API_URL = 'http://localhost:7000/launches';

const rocketType = new GraphQLObjectType({
    name: 'rocket',
    fields: {
        rocket_id: { type: GraphQLInt },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    }
});

const launchType = new GraphQLObjectType({
    name: 'Launch',
    fields: {
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLInt },
        launch_success: { type: GraphQLBoolean },
        launch_date_local: { type: GraphQLString },
        rocket: { type: rocketType }
    }
});

/* const allLaunchesType = new GraphQLObjectType({
    name: 'allLaunches',
    fields: {
        launches: { type: new GraphQLList(launchType) }
    }
}); */

const allLaunchesType = new GraphQLList(launchType);

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        launch: {
            type: launchType,
            args: { flight_number: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return axios.get(
                    LAUNCH_API_URL + `?flight_number=${args.flight_number}`
                ).then(response => response.data[0]);
            }
        },
        allLaunches: {
            type: allLaunchesType,
            resolve() {
                return axios.get(
                    LAUNCH_API_URL
                ).then(response => response.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: queryType
})