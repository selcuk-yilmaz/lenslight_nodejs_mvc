import mongoose from "mongoose";

const conn = () => {
  mongoose
  .set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "lenslight_tr",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection the database successfuly");
    })
    .catch((err) => {
      console.log(`db connection err: ${err}`);
    });
};
export default conn;
