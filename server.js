const express = require("express"), app = express(), path = require("path")
app.use(express.static(path.join(__dirname, "static")))

app.listen(process.env.PORT || 443, () => {
	console.log('сервер пашет')
})