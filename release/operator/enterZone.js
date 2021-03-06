"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Operator_1 = require("rxjs/Operator");
var Subscriber_1 = require("rxjs/Subscriber");
var Observable_1 = require("rxjs/Observable");
function enterZone(zone) {
    return this.lift(new EnterZoneOperator(zone));
}
exports.enterZone = enterZone;
var EnterZoneOperator = /** @class */ (function () {
    function EnterZoneOperator(_zone) {
        this._zone = _zone;
    }
    EnterZoneOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new EnterZoneSubscriber(subscriber, this._zone));
    };
    return EnterZoneOperator;
}());
exports.EnterZoneOperator = EnterZoneOperator;
var EnterZoneSubscriber = /** @class */ (function (_super) {
    __extends(EnterZoneSubscriber, _super);
    function EnterZoneSubscriber(destination, _zone) {
        var _this = _super.call(this, destination) || this;
        _this._zone = _zone;
        return _this;
    }
    EnterZoneSubscriber.prototype._next = function (value) {
        var _this = this;
        this._zone.run(function () { return _this.destination.next(value); });
    };
    return EnterZoneSubscriber;
}(Subscriber_1.Subscriber));
