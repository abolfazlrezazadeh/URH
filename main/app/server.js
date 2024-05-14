const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
// security packages
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const { allRoutes } = require("./routes/router");
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
});

module.exports = class Application {
  #app = express();
  constructor(PORT, DB_URL) {
    this.configDatabase(DB_URL);
    this.configApplication();
    //   this.initClientSession();
    //   this.initTemplateEngine();
    this.createServer(PORT);
    this.createRoutse();
    this.errorHandler();
  }
  configApplication() {
    this.#app.use(cors());
    //morgan is logging every requests
    //dev == in developing status
    this.#app.use(morgan("dev"));
    // this.#app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '50mb', extended: false }));
    this.#app.use(express.json());
    this.#app.use(
      express.urlencoded({
        parameterLimit: 100000,
        limit: "50mb",
        extended: true,
      })
    );
    this.#app.use(mongoSanitize());
    this.#app.use(helmet());
    this.#app.use(hpp());
    this.#app.use(limiter);
    this.#app.use(express.static(path.join(__dirname, "public")));
  }
  createServer(PORT) {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(PORT, () => {
      console.log(`${process.env.BASE_URL}:${PORT}`);
    });
  }

  createRoutse() {
    this.#app.use(allRoutes);
  }

  configDatabase(DB_URL) {
    const mongoose = require("mongoose");
    mongoose.set("strictQuery", false);
    //Set up default mongoose connection
    mongoose.connect(DB_URL, (error) => {
      if (error) throw error;
      console.log(`connected to db successfully ....`);
    });
    //for connecting to db
    mongoose.connection.on("connected", () => {
      // console.log("connected");
    });
    //for disconnecting from mongoDB
    mongoose.connection.on("disconnect", () => {
      console.log("mongoose connection is disconnected");
    });
    //for disconnecting securely
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("disconnected");
      process.exit(0);
    });
  }

  errorHandler() {
    const createErrors = require("http-errors");

    // Middleware to handle not found error
    this.#app.use((req, res, next) => {
      next(createErrors.NotFound("Page not found"));
    });

    // Error handling middleware
    this.#app.use((error, req, res, next) => {
      // Check if headers have already been sent
      if (res.headersSent) {
        return next(error);
      }

      // Set error details
      const status = error.status || 500;
      const message = error.message || "Internal Server Error";

      // Send error response
      res.status(status).json({
        errors: {
          status,
          message,
        },
      });
    });
  }
};
