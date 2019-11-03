"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.isLoggedIn) {
        next();
        return;
    }
    else {
        res.status(403);
        res.send('Not Allowed!');
    }
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.isLoggedIn) {
        res.send("\n    <div>\n    <p>You are logged in</p>\n    <a href=\"/logout\">logout</a>\n    </div>\n    ");
    }
    else {
        res.send("\n    <div>\n    <p>You are NOT logged in</p>\n    <a href=\"/login\">login</a>\n    </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/login');
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { isLoggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('You must provide correct email and password');
    }
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Here is some private informations');
});
