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
function leaveZone(zone) {
    return this.lift(new LeaveZoneOperator(zone));
}
exports.leaveZone = leaveZone;
var LeaveZoneOperator = /** @class */ (function () {
    function LeaveZoneOperator(_zone) {
        this._zone = _zone;
    }
    LeaveZoneOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new LeaveZoneSubscriber(subscriber, this._zone));
    };
    return LeaveZoneOperator;
}());
exports.LeaveZoneOperator = LeaveZoneOperator;
var LeaveZoneSubscriber = /** @class */ (function (_super) {
    __extends(LeaveZoneSubscriber, _super);
    function LeaveZoneSubscriber(destination, _zone) {
        var _this = _super.call(this, destination) || this;
        _this._zone = _zone;
        return _this;
    }
    LeaveZoneSubscriber.prototype._next = function (value) {
        var _this = this;
        this._zone.runOutsideAngular(function () { return _this.destination.next(value); });
    };
    return LeaveZoneSubscriber;
}(Subscriber_1.Subscriber));
