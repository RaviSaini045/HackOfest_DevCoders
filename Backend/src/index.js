import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection is interrupted!!!!", err);
  });
