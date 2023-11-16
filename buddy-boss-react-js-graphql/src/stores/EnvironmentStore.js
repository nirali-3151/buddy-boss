var EnvironmentStore = {
    getApiHost: function (name) {
        switch (name) {

            // place your baseURL according it's environment
            case 'test':
                return 'http://localhost:8082/graphql'
            case 'live':
                return 'https://node-js-postgreysql.herokuapp.com';
            default:
                throw ("Unknown Environment.getApiHost: " + name)
        }
    }
}

export default EnvironmentStore;