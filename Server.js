const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to your frontend URL
}));
