const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://dvvsatyanarayana3628:23h45a6101@cluster0.pgawxto.mongodb.net/Grocery-Web-App?retryWrites=true&w=majority'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017