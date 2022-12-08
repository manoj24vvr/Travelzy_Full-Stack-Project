const express = require("express");
const app = express();

require("./db/conn");

// port generation
const port = process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.send("Hello World!")
});

app.listen(port, () =>{
    console.log(`Server is running at port number ${port}`);
})

//automatically call

