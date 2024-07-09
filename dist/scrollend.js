"use strict";
(() => {
  // node_modules/@igor.dvlpr/hook/dist/index.mjs
  function hook(proto, method, handler, replace = false) {
    if (!(method in proto)) {
      return false;
    }
    const native = proto[method];
    proto[method] = function(...fnArgs) {
      if (!replace) {
        native.apply(this, fnArgs);
      }
      return handler.apply(this, fnArgs);
    };
    return true;
  }

  // src/index.mts
  if (typeof window === "undefined") {
    throw "Not in a browser.";
  }
  var supported = "onscrollend" in window;
  if (!supported) {
    let addScrollEndHandler = function(eventName, handler) {
      if (eventName !== "scrollend") {
        return;
      }
      const target = this;
      if (registered.has(target)) {
        return;
      }
      let timeout;
      target.addEventListener(
        "scroll",
        () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            target.dispatchEvent(scrollEndEvent);
          }, 100);
        },
        false
      );
      registered.set(target, true);
      target.addEventListener("scrollend", handler, false);
    };
    addScrollEndHandler2 = addScrollEndHandler;
    const scrollEndEvent = new Event("scrollend");
    const registered = /* @__PURE__ */ new WeakMap();
    hook(window, "addEventListener", addScrollEndHandler);
    Object.defineProperty(window, "onscrollend", {
      set: function(handler) {
        addScrollEndHandler.call(this, "scrollend", handler);
      }
    });
    hook(document, "addEventListener", addScrollEndHandler);
    Object.defineProperty(document, "onscrollend", {
      set: function(handler) {
        addScrollEndHandler.call(this, "scrollend", handler);
      }
    });
  }
  var addScrollEndHandler2;
})();
