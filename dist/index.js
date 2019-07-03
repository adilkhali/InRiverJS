"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config"));
var models_1 = require("./models");
var request_1 = __importDefault(require("./utils/request"));
var InRiverAPIClient = /** @class */ (function () {
    function InRiverAPIClient(apiKey, apiRoot, apiversion) {
        if (apiRoot === void 0) { apiRoot = "https://apieuw.productmarketingcloud.com"; }
        if (apiversion === void 0) { apiversion = "v1.0.0"; }
        this.request = new request_1.default(new config_1.default(apiKey, apiRoot, apiversion));
    }
    Object.defineProperty(InRiverAPIClient.prototype, "channels", {
        get: function () {
            if (this.channel !== undefined) {
                return this.channel;
            }
            this.channel = new models_1.Channel(this.request);
            return this.channel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "syndicates", {
        get: function () {
            if (this.syndicate !== undefined) {
                return this.syndicate;
            }
            this.syndicate = new models_1.Syndicate(this.request);
            return this.syndicate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "queries", {
        get: function () {
            if (this.query !== undefined) {
                return this.query;
            }
            this.query = new models_1.Query(this.request);
            return this.query;
        },
        enumerable: true,
        configurable: true
    });
    return InRiverAPIClient;
}());
exports.default = InRiverAPIClient;
//# sourceMappingURL=index.js.map