module("Accordion");
test("it hides all but the first content", function() {
  accordion.init("#accordion");
  equal($("#accordion p").filter(":visible").length, 1);
});

test("clicking a heading changes the visible item", function() {
  accordion.init("#accordion");
  $("#accordion h2").last().trigger("click");
  equal($("#accordion p").filter(":visible").text(), "Something about JS");
});


