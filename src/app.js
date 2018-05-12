const SwaggerExpress = require('swagger-express-mw');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const compression = require('compression');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const env = require('../config/env/.env.json');
const app = require('express')();

/* eslint fp/no-unused-expression: off */
/* eslint no-unused-expressions: off */
/* eslint fp/no-nil: off */
/* eslint fp/no-mutation: off */
/* eslint no-param-reassign: off */
const swaggerConfig = {
    appRoot: __dirname,
    swaggerSecurityHandlers: {
        kt_api_key: (
            req,
            authOrSecDef,
            scopesOrApiKey,
            cb
        ) => {
            const err = new Error('unauthenticated');
            err.statusCode = 401;
            env.apiKey.kt === scopesOrApiKey
                ? cb()
                : cb(err);
        }
    }
};

function initSwaggerExpress(err, swaggerExpress) {
    if (err) {
        console.error(err);
    } else {
        const initErrorResponse = (msg, statusCode) => ({
            statusCode,
            msg
        });

        const setMiddleWares = (server) => {
            server.use(awsServerlessExpressMiddleware.eventContext());
            server.use(bodyParser.json());
            server.use(bodyParser.urlencoded({
                extended: true,
            }));
            server.use(compression());
            server.use(cors());
            server.use(cookieParser(env.cookieSecret));
            server.use(methodOverride());
        };

        const setHandleErrors = (server) => {
            server.use((error, req, res, next) => {
                if (error) {
                    const msg = error.message;
                    const errorResponse = initErrorResponse(
                        msg,
                        error.statusCode ? error.statusCode : 500
                    );

                    console.error(errorResponse);
                    res.json(errorResponse);
                } else {
                    next();
                }
            });

            server.use((req, res) => {
                const errorResponse = initErrorResponse('Not Found', 404);
                res.end(JSON.stringify(errorResponse));
            });
        };

        setMiddleWares(app);
        swaggerExpress.register(app);
        setHandleErrors(app);
        console.log('complete set configuration');
    }
}

SwaggerExpress.create(swaggerConfig, initSwaggerExpress);

module.exports = app;
