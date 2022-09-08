const http = require("http");
const {EventEmitter} = require("node:events");


const express = require("express");



const env = require("./helpers/getEnv");
env.config();
EventEmitter.captureRejections = true;

//routes
const mainRoutes = require("./routes/mainRoutes");

const app = express();
const server = http.createServer();
const emitter = new EventEmitter();




//event listners
emitter.on("connected", req => {
    console.log("tcp connection successful");
    console.log(req.url, req.method);
})

app.use(express.json());
app.use((req, res, next) => {
    emitter.emit("connected", req);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS, PUT, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Max-Age", 60 * 60 * 24);
    console.log("cors set successfully");
    next();
});
app.use("/api", mainRoutes);


app.use("*", (req, res, next) => {
    const error = new Error("Oops!! Navigated to a non-existing path");
    error.status = 404;
    next(error);
})


app.use((error, req, res, next) => {
    res.status(error.status);
    res.json({
        message: error.message,
        status: "error",
        statusCode: error.status
    })
    next();
})

server.on("request", app);


server.on("listening", async () => {
    console.log(`Server has started on http://${server.address().address}:${server.address().port} with ip family ${server.address().family}`)
})


server.listen(Number(process.env.PORT), process.env.IP);