const express = require('express')
const app = express()
app.get('/', (request,response) => {
	response.end('this is index')
})

app.listen(3000, () => console.log("App listening on port 3000"))