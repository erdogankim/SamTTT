"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MBAStudent = void 0;
var drived_1 = require("./drived");
var MBAStudent = /** @class */ (function (_super) {
    __extends(MBAStudent, _super);
    /**
     *
     */
    function MBAStudent(name, surname) {
        var _this = _super.call(this, name, surname) || this;
        _this.name = name;
        _this.surname = surname;
        return _this;
    }
    MBAStudent.prototype.myAbsMethod = function () {
        return 5;
    };
    return MBAStudent;
}(drived_1.Student));
exports.MBAStudent = MBAStudent;
