'use strict';

exports.ok = (values, res, i, msg) => {
    const data = {
        status: 200,
        message: msg,
        rows: i,
        data: values
    };
    res.json(data);
    res.end();
};

exports.badRequest = (values, res, msg) => {
    const data = {
        status: 400,
        message: msg,
        data: values
    };
    res.json(data);
    res.end();
};

exports.err = (values, res, msg) => {
    const data = {
        status: 500,
        message: msg,
        data: values
    };
    res.json(data);
    res.end();
}