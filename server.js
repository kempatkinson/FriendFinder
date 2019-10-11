var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// require("./routes/apiRoutes")(app);

// var htmlRoutes = require("./routes/htmlRouting");
// htmlRoutes(app);

require("./app/routing/htmlRouting")(app);
require("./app/routing/apiRouting")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
