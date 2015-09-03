var Utils = {
  addLoadEvent: function(func) {
    var old = window.onload;
    if (typeof window.onload !== 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        if (typeof old === 'function') {
          old();
        }
        func();
      };
    }
  }
};
