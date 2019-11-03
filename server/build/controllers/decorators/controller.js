"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
function controller(pathPrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key]; // refers to the method in loginController
            var path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                router.get("" + pathPrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
