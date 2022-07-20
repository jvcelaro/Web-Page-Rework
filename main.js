const express = require("express");
const PORT = 5000
const path = require("path")

let exp = express()

exp.use(express.static(path.join(__dirname, "images")))
exp.use(express.static(path.join(__dirname, "style")))


exp.set('views', path.join(__dirname, "template"))
exp.set("view engine", "ejs");



exp.get("/", (req, res)=>{

    res.redirect("home")
})

exp.get("/home", (req, res) => {

    res.render("index");

})

exp.get("/services", (req, res) => {

    res.render("services");

})

exp.get("/about", (req, res) => {

    res.render("aboutus");

})

exp.get("/contact", (req, res) => {

    res.render("contactus");

})

exp.get("/resources", (req, res) => {

    res.render("resources");

})


exp.listen(PORT, (err) =>{
    if (err) { throw err } else { console.log(`Server running on ${PORT} door`)}
})