var accordion = {
  init: function(selector) {
    this.elem = $(selector);
    this.items = this.elem.children("div");
    this.headings = this.items.children("h2");
    this.content = this.items.children("p");
    this.hideAll();
    this.showIndex(0);
    this.bindClick();
  },
  bindClick: function() {
    var self = this;
    this.headings.on("click", function() {
      self.hideAll();
      $(this).next("p").show();
    });
  },
  showIndex: function(i) {
    this.content.eq(i).show();
  },
  hideAll: function() {
    this.content.hide();
  }
};
