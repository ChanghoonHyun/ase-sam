/**
 * Created by chhyun on 2018. 2. 9..
 */
'use strict';

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./dist/app');
const server = awsServerlessExpress.createServer(app);

module.exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);