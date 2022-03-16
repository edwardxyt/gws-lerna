!function (e, t) {
    "object" === typeof exports && "object" === typeof module ? module.exports = t(require("lodash"), require("react")) : "function" === typeof define && define.amd ? define(["lodash", "react"], t) : "object" === typeof exports ? exports.moduleA = t(require("lodash"), require("react")) : e.moduleA = t(e._, e.React)
}(self, (function (e, t) {
    return (() => {
        "use strict";
        var r = {
            607: t => {
                t.exports = e
            }, 359: e => {
                e.exports = t
            }
        }, o = {};

        function n(e) {
            var t = o[e];
            if (void 0 !== t) return t.exports;
            var u = o[e] = {exports: {}};
            return r[e](u, u.exports, n), u.exports
        }

        n.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, {a: t}), t
        }, n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
        }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        };
        var u = {};
        return (() => {
            n.r(u), n.d(u, {default: () => a});
            var e = n(607), t = n.n(e), r = n(359), o = n.n(r);
            t().chunk(["a", "b", "c", "d"], 2);

            function a() {
                var e = (0, r.useState)(0), t = e[0], n = e[1];
                return o().createElement("div", null, o().createElement("p", null, "You clicked ", t, " times"), o().createElement("button", {
                    onClick: function () {
                        return n(t + 1)
                    }
                }, "Click me"))
            }
        })(), u
    })()
}));