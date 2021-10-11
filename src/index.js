const api = require('lambda-api')();
const glob = require('glob');
const path = require('path');

const routeFiles = glob.sync('src/api/routes/**/*.js');

const initialize = () => {
    routeFiles.forEach((routeFile) => {
        console.log(routeFile.substring(routeFile.indexOf(path.sep)))
        const { route } = require(`./${routeFile.substring(routeFile.indexOf(path.sep))}`);
        api.register(route);
    })
}

initialize();

exports.handler = async (event, context) => {
    return await api.run({...event, ...{ path: event.path } }, context)
};
