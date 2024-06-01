
const express = require("express");

const morgan = require("morgan");
const path = require("node:path");


const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(express.json());


app.use(express.static(path.join(__dirname + ".public")));







app.listen(PORT, () => {
    console.log(`Automatch is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
}
)