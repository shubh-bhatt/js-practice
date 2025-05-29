var ans = (function abc() {
  var a = 10;
  return {
    set: function (gimme) {
      a = gimme;
    },
    get: function () {
      console.log(a);
    },
  };
})();

ans.set(52);
ans.get();
