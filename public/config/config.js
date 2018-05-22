var config = {
    "RequestBaseUrl": "http://123.207.183.250:1001",
};

(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(global, global.document);
    } else {
        factory(global);
    }
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    if (noGlobal) {
        window.config = config;
    }
    return config;
}));
