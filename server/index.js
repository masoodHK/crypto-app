const express = require("express"),
        ccxt = require("ccxt"),
        mongoose = require("mongoose"),
        cors = require("cors"),
        helmet = require("helmet"),
        moment = require("moment"),
        http = require("http");

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
    response.send({message:"The server works doe rwar"});
});

app.get("/api/crypto", (request, response) => {
    let date = moment().format("MM-DD-YYYY")
    const collection = db.collection("cryptocurrency-data");
    collection.findOne({ date }, (error, result) => {
        if (error) {
            response.send(error)
        }
        if(!result) {
            coinmarketcap.fetchCurrencies().then(res => {
                collection.insertOne({date, data: res})
                response.send({date, data: res})
            }).catch(error => {
                response.status(404).send(error)
            })
        }
        else {
            response.send(result)
        }
    })
});

app.get("/api/market", (request, response) => {
    coinmarketcap.loadMarkets().then(res => {
        console.log(coinmarketcap.countries)
        response.send({res})
    }).catch(error => {
        response.status(404).send(error)
    })
});

http.createServer(app).listen(port, () => console.log(`Server Started at http://${ip}:${port}`))
