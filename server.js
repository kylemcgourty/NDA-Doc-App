var express = require('express');

var ap = express();

ap.use(express.static(__dirname));

ap.listen(3000, function () {
  console.log("Listening to port 3000");
})

module.exports = ap;