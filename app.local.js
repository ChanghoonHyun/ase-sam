/**
 * Created by chhyun on 2018. 2. 21..
 */
'use strict';

const app = require('./dist/app');
const env = require('./config/env/.env.json');
const port = env.local.port;

app.listen(port);

console.log('http://localhost:' + port);