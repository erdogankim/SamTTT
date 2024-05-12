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
exports.Student = void 0;
var _1 = require(".");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname) {
        var _this = _super.call(this, name, surname) || this;
        _this.name = name;
        _this.surname = surname;
        return _this;
    }
    Student.prototype.studentShowMessage = function () {
        _super.prototype.showMessage.call(this);
    };
    return Student;
}(_1.Person));
exports.Student = Student;
