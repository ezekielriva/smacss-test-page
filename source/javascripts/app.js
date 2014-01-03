var app = {
  behavior: {},

  init: function() {
    for(var b in this.behavior) {
      this.behavior[b].init();
    }
  },
}
