require("../index");

test("replacing variables by their values", () => {
  var str = "Hello I'm % and I'm % years old.";
  var input = str.format(["John", 24]);
  var output = "Hello I'm John and I'm 24 years old.";

  expect(input).toBe(output);
});

test("replacing variables by their values with a customized var type", () => {
  var str = "Hello I'm $ and I'm $ years old.";
  var input = str.format(["John", 24], "$");
  var output = "Hello I'm John and I'm 24 years old.";

  expect(input).toBe(output);
});
