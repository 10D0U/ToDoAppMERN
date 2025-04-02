const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://arkar:arkar1234@todoappcluster.uvs1vsi.mongodb.net/?retryWrites=true&w=majority&appName=ToDoAppCluster"
      )
      .then(() => {
        console.log("Connected to MongoDB");
      });
  } catch (error) {
    console.error("Database connection failed: " + error.message);
    throw error;
  }
};

connectDB();
