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
    Object.defineProperty(InRiverAPIClient.prototype, "Channel", {
        get: function () {
            if (this.InRiverChannel !== undefined) {
                return this.InRiverChannel;
            }
            this.InRiverChannel = new models_1.Channel(this.request);
            return this.InRiverChannel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "Syndicates", {
        get: function () {
            if (this.InRiverSyndicate !== undefined) {
                return this.InRiverSyndicate;
            }
            this.InRiverSyndicate = new models_1.Syndicate(this.request);
            return this.InRiverSyndicate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "Query", {
        get: function () {
            if (this.InRiverQuery !== undefined) {
                return this.InRiverQuery;
            }
            this.InRiverQuery = new models_1.Query(this.request);
            return this.InRiverQuery;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "System", {
        get: function () {
            if (this.InRiverCongifuration !== undefined) {
                return this.InRiverCongifuration;
            }
            this.InRiverCongifuration = new models_1.System(this.request);
            return this.InRiverCongifuration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "Media", {
        get: function () {
            if (this.InRiverMedia !== undefined) {
                return this.InRiverMedia;
            }
            this.InRiverMedia = new models_1.Media(this.request);
            return this.InRiverMedia;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "Link", {
        get: function () {
            if (this.InRiverLink !== undefined) {
                return this.InRiverLink;
            }
            this.InRiverLink = new models_1.Link(this.request);
            return this.InRiverLink;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "Workarea", {
        get: function () {
            if (this.InRiverWorkarea !== undefined) {
                return this.InRiverWorkarea;
            }
            this.InRiverWorkarea = new models_1.Workarea(this.request);
            return this.InRiverWorkarea;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "Model", {
        get: function () {
            if (this.InRiverModel !== undefined) {
                return this.InRiverModel;
            }
            this.InRiverModel = new models_1.Model(this.request);
            return this.InRiverModel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InRiverAPIClient.prototype, "Entities", {
        get: function () {
            if (this.InRiverEntity !== undefined) {
                return this.InRiverEntity;
            }
            this.InRiverEntity = new models_1.Entity(this.request);
            return this.InRiverEntity;
        },
        enumerable: true,
        configurable: true
    });
    return InRiverAPIClient;
}());
exports.default = InRiverAPIClient;
//# sourceMappingURL=index.js.map