'use strict';
const got = require('got');

const apikeyauth = async (req, res, next) => {
    // Validate the apikey header
    if (
        !req.headers['authorization'] || 
        !req.headers['authorization'].toLowerCase().indexOf('apikey') < 0) {
            res.status(401);
            return next(new Error('Forbidden'));
    }

    try {
        const options = {
            method: 'POST',
            url: process.env.GATEKEEPER_URL,
            json: {
                appId: process.env.GATEKEEPER_APP_ID
            },
            headers: {
                'Authorization': req.headers['authorization']
            }
        };
        const { body } = await got(options).json().catch((error) => {
            console.error(error);
            return next(new Error(error));
        });

        req.apiauth = body;
        next();
    } catch (error) {
            next(error);
    }
}

module.exports = apikeyauth;