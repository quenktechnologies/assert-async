"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.AsyncMatcher = void 0;
var future_1 = require("@quenk/noni/lib/control/monad/future");
var assert_1 = require("@quenk/test/lib/assert");
/**
 * AsyncMatcher
 */
var AsyncMatcher = /** @class */ (function () {
    function AsyncMatcher(value, matcher) {
        this.value = value;
        this.matcher = matcher;
        this.prefix = 'must';
    }
    Object.defineProperty(AsyncMatcher.prototype, "be", {
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AsyncMatcher.prototype, "not", {
        get: function () {
            var _this = this;
            return new AsyncMatcher(this.value, function (v) { return _this.matcher(v).not; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AsyncMatcher.prototype, "instance", {
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    AsyncMatcher.prototype.of = function (cons) {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).of(cons); });
    };
    AsyncMatcher.prototype.object = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).object(); });
    };
    AsyncMatcher.prototype.array = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).array(); });
    };
    AsyncMatcher.prototype.string = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).string(); });
    };
    AsyncMatcher.prototype.number = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).number(); });
    };
    AsyncMatcher.prototype.boolean = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).boolean(); });
    };
    AsyncMatcher.prototype.true = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).true(); });
    };
    AsyncMatcher.prototype.false = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).false(); });
    };
    AsyncMatcher.prototype.null = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).null(); });
    };
    AsyncMatcher.prototype.undefined = function () {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).undefined(); });
    };
    AsyncMatcher.prototype.equal = function (b) {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).equal(b); });
    };
    AsyncMatcher.prototype.equate = function (b) {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).equate(b); });
    };
    AsyncMatcher.prototype.throws = function (message) {
        var _this = this;
        return future_1.attempt(function () { _this.matcher(_this.value).throw(message); });
    };
    return AsyncMatcher;
}());
exports.AsyncMatcher = AsyncMatcher;
/**
 * assert wrapper
 */
var assert = function (value) {
    return new AsyncMatcher(value, function (v) { return assert_1.assert(v); });
};
exports.assert = assert;
//# sourceMappingURL=assert.js.map