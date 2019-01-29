const express = require("express");

const app = express();

// Server PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on PORT ${port}`));
