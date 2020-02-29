const awSe = require('aws-serverless-express');
const app = require('./app');
const server = awSe.createServer(app);

exports.handler = (event, context) => {
    awSe.proxy(server, event, context);
}