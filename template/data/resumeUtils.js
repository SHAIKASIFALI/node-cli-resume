const split = require("split-string");

function splitSpace(str) {
  return split(str.trimEnd(), { separator: " " });
}
function splitPeriod(str) {
  return split(str.trimEnd(), { separator: "." });
}
module.exports = {
  splitSpace,
  splitPeriod,
};
