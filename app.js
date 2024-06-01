
const express = require("express");

const morgan = require("morgan");
const path = require("node:path");


const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname + ".public")));


app.get('/', (req, res, next) => {
    res.status(200).json({success: {message: "Index successful"}, statusCode: 200});
  })


app.get("/home", (req, res, next) => {
    // response.send("This route points to the Home page.") 
    res.status(200).json ({success: {message: "This route points to the Home page."}})
});

app.get("/contact", (req, res, next) => {
    // response.send("This route points to the About page.")
    res.status(200).json ({success: {message: "This route points to the contact page."}})
});

app.get("/faq", (req, res, next) => {
    // response.send("This route points to the Login page.")
    res.status(200).json ({success: {message: "This route points to the faq page."}})
});

app.get("/form", (req, res, next) => {
    // response.send("This route points to the Admin Console page.")
    res.status(200).json ({success: {message: "This route points to the form page."}})
});

app.get("/howitworks", (req, res, next) => {
    // response.send("This route points to the Create Book page.")
    res.status(200).json ({success: {message: "This route points to the How it Works page."}})
});

app.get("/news", (req, res, next) => {
    // response.send("This route points to the Create Book page.")
    res.status(200).json ({success: {message: "This route points to the news page."}})
});

app.get("/profile", (req, res, next) => {
    // response.send("This route points to the Create Book page.")
    res.status(200).json ({success: {message: "This route points to the login page."}})
});

app.get("/register", (req, res, next) => {
    // response.send("This route points to the Create Book page.")
    res.status(200).json ({success: {message: "This route points to the registration page."}})
});




app.listen(PORT, () => {
    console.log(`Automatch is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
}
)