const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ "users": "dave" })
})

app.listen(5000, () => { console.log("server started at port 5000") })