"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var leaveZone_1 = require("../../operator/leaveZone");
Observable_1.Observable.prototype.leaveZone = leaveZone_1.leaveZone;
