// import express
const express = require('express');
const server = express();
// set up express to read JSON
server.use(express.json());




server.listen(8000, () => console.log('\n** API Up and Running **\n'));