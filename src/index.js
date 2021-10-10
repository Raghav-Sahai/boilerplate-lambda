const api = require('lambda-api')();
// const glob = require('glob');
// const path = require('path');
const { route } = require('./api/routes/route/post')

// const routeFiles = glob.sync('src/routes/**/*.js');

const initialize = () => {
    // routeFiles.forEach((routeFile) => {
    //     // const { route } = require(`./${routeFile.substring(routeFile.indexOf(path.sep))}`);
    //     api.register(route);
    // })
    api.register(route)
}

initialize();

exports.handler = async (event, context) => {
    return await api.run({...event, ...{ path: event.path } }, context)
};
