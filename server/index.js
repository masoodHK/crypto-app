const express = require("express"),
        ccxt = require("ccxt"),
        mongoose = require("mongoose"),
        cors = require("cors"),
        helmet = require("helmet"),
        moment = require("moment");
const http = require("http")

const coinmarketcap = new ccxt.coinmarketcap()

const port = 3000, ip = "localhost"

const db = mongoose.createConnection("mongodb+srv://user:user@crypto-app-v15pa.mongodb.net/crypto-app-database", {
    useNewUrlParser: true
});

const app = express();

app.use(cors())

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["*"],
        connectSrc: ["*"],
    }
}))

app.get("/", (request, response) => {
    response.status(200).send({message:"The server works doe rwar"});
});

app.get("/api/crypto", (request, response) => {
    let date = moment().format("MM-DD-YYYY")
    const collection = db.collection("cryptocurrency-data");
    collection.findOne({ date }, (error, result) => {
        console.log(result)
        if(!result) {
            coinmarketcap.fetchCurrencies().then(res => {
                collection.insertOne({date, data: res})
                response.status(200).send({date, data: res})
            }).catch(error => {
                response.status(404).send(error)
            })
        }
        else {
            response.status(200).send(result)
        }
    })
});

http.createServer(app).listen(port, ip, () => console.log(`Server Started at http://${ip}:${port}`))