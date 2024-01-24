/*! https://github.com/jornatf/string-prototype-format-js */
if (!String.prototype.format) {
  (function () {
    var defaultVarType = "%";

    /**
     * Format a string replacing variables.
     * @author Jordan Nataf
     * @license MIT
     * @example
     * var str = "Hello I'm % and I'm % years old.";
     * var formatted = str.format(["John", 24]);
     * console.log(formatted);
     * // Output: "Hello I'm John and I'm 24 years old."
     * @param {string[]} args
     * @param {string} varType (default: "%")
     * @returns Formatted string
     */
    function format([...args], varType = defaultVarType) {
      var res = "";
      var str = this.toString();
      var strArr = str.split(varType);
      var length = strArr.length - 1;

      for (let i = 0; i < length; i++) {
        res = res.concat(strArr[i]);

        var arg = args[i];
        if (arg !== undefined) {
          res = res.concat(arg);
        }
      }

      res = res.concat(strArr[length]);

      return res;
    }

    String.prototype.format = format;
  })();
}
