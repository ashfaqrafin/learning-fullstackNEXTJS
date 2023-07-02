import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connected to database");
    });

    connection.on("error", (err) => {
      console.log("error connecting to database", err);
      process.exit();
    });
  } catch (err) {}
};

export default connect;
