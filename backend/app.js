const express = require('express');
const db = require('./models');

const app = express();
app.use(express.json());

// Routers 
const postRouter = require('./routes/posts');
app.use('/post', postRouter);

db.sequelize.sync().then(()=> {
	app.listen(3001, () => {
		console.log('server running on port 3001');
	});
})