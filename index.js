/* const express = require("express");
const app = express();
const path = require("path");

app.engine("html", require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "/.bin/public")));
app.set("views", path.join(__dirname, "/.bin/views"));
app.set("view engine", "ejs");
app.set("port", 3000);
app.get('/', (req, res) => {
	res.render(path.join(__dirname + '/index.ejs'));
});
app.get('*', function(req, res) {
  res.send('Error 404!');
});
app.listen('3000', function () {
  console.log('Ready, port 3030');
})
 */
