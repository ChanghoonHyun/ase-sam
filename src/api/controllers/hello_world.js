const util = require('util');

function hello(req, res) {
    const name = req.swagger.params.name.value || 'stranger';
    const h = util.format('Hello, %s!', name);

    return res.json(h);
}

module.exports.hello = hello;
