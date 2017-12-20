(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Operator'), require('rxjs/Subscriber'), require('rxjs/Observable'), require('rxjs/operator/pluck'), require('rxjs/operator/map'), require('rxjs/operator/distinctUntilChanged')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Operator', 'rxjs/Subscriber', 'rxjs/Observable', 'rxjs/operator/pluck', 'rxjs/operator/map', 'rxjs/operator/distinctUntilChanged'], factory) :
    (factory((global.ngrx = global.ngrx || {}, global.ngrx.core = global.ngrx.core || {}),global.rxjs_Operator,global.Rx,global.Rx,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype));
}(this, (function (exports,rxjs_Operator,rxjs_Subscriber,rxjs_Observable,rxjs_operator_pluck,rxjs_operator_map,rxjs_operator_distinctUntilChanged) { 'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function enterZone(zone) {
    return this.lift(new EnterZoneOperator(zone));
}
var EnterZoneOperator = /** @class */ (function () {
    function EnterZoneOperator(_zone) {
        this._zone = _zone;
    }
    EnterZoneOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new EnterZoneSubscriber(subscriber, this._zone));
    };
    return EnterZoneOperator;
}());
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
}(rxjs_Subscriber.Subscriber));

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function leaveZone(zone) {
    return this.lift(new LeaveZoneOperator(zone));
}
var LeaveZoneOperator = /** @class */ (function () {
    function LeaveZoneOperator(_zone) {
        this._zone = _zone;
    }
    LeaveZoneOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new LeaveZoneSubscriber(subscriber, this._zone));
    };
    return LeaveZoneOperator;
}());
var LeaveZoneSubscriber = /** @class */ (function (_super) {
    __extends$1(LeaveZoneSubscriber, _super);
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
}(rxjs_Subscriber.Subscriber));

function select(pathOrMapFn) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    var mapped$;
    if (typeof pathOrMapFn === 'string') {
        mapped$ = rxjs_operator_pluck.pluck.call.apply(rxjs_operator_pluck.pluck, [this, pathOrMapFn].concat(paths));
    }
    else if (typeof pathOrMapFn === 'function') {
        mapped$ = rxjs_operator_map.map.call(this, pathOrMapFn);
    }
    else {
        throw new TypeError("Unexpected type " + typeof pathOrMapFn + " in select operator,"
            + " expected 'string' or 'function'");
    }
    return rxjs_operator_distinctUntilChanged.distinctUntilChanged.call(mapped$);
}

var compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
};

exports.enterZone = enterZone;
exports.EnterZoneOperator = EnterZoneOperator;
exports.leaveZone = leaveZone;
exports.LeaveZoneOperator = LeaveZoneOperator;
exports.select = select;
exports.compose = compose;

Object.defineProperty(exports, '__esModule', { value: true });

})));