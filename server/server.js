const express = require('express');
const bodyParser = require('body-parser');

const lControllers = require(__dirname + "/controllers/list_controllers");

const app = express();
app.use(bodyParser.json());

const port = 3005;

app.get("/api/list_grid", lControllers.read);

app.post("/api/list_grid", lControllers.create);


app.put("/api/list_grid/:id", lControllers.update);

app.delete("/api/list_grid/:id", lControllers.delete);




app.listen(port, () => {
    console.log('Server is listening on port ' + port)
});