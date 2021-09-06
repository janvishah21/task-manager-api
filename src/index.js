const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');
const projectRouter = require('./routers/projects');
const accessRequestRouter = require('./routers/accessRequests');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(projectRouter);
app.use(accessRequestRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});