require('module-alias/register')
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const LoginController = require("@/controllers/LoginController");
var bodyParser = require('body-parser');
const routes = require("@/routes/index")

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/*+json' }))
const port = process.env.PORT;

app.use('/', routes)
app.get("/login", LoginController.login)

app.listen(port, () => {
    console.log("Server is listening on port: " + port);
})