const  express = require('express');
const app = express();
const ConnectDB = require('./helper/ConnectDB');



ConnectDB();

app.use(express.json());
app.use('/register', require('./routes/register'));
app.use("/login", require('./routes/login'));
app.use('/sender', require('./routes/colis'));
app.use('/receiver', require('./routes/received'));
app.use('/admin', require('./routes/admin'));
app.use('/edit', require('./routes/edit'));
app.use('/reset', require('./routes/reset'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is runnig on port: ${PORT}`));