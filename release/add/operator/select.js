"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var select_1 = require("../../operator/select");
Observable_1.Observable.prototype.select = select_1.select;
