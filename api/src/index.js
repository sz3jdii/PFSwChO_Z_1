const express = require('express');
const redis = require('redis');

const app = express();

const port = 3124;

app.get('/api', (req, res) => {
    res.status(200).send({
        message: "Looks like you've hit the root url",
        availableurls: [
            "/api/write/:key/:value",
            "/api/read/:key"
        ],   
    })
});


app.get('/api/read/:key', (req, res) => {
    (async () => {
        const client = redis.createClient({
            port: process.env.REDIS_PORT || 6379,
            socket:{
                host: process.env.REDIS_HOST || '127.0.0.1'
            },
        });

        client.on('error', (err) => console.log('Redis Client Error', err));

        await client.connect();

        const value = await client.get(req.params.key);
        res.status(200).send({
            status: 'Ok!',
            data: value
        });
    })();
});


app.get('/api/write/:key/:value', (req, res) => {
    (async () => {
        const client = redis.createClient({
            port: process.env.REDIS_PORT || 6379,
            socket:{
                host: process.env.REDIS_HOST || '127.0.0.1' 
            },
        });

        client.on('error', (err) => console.log('Redis Client Error', err));

        await client.connect();

        await client.set(req.params.key, req.params.value);
        const value = await client.get(req.params.value);
        res.status(200).send({
            status: 'Ok!',
            data: value
        });
    })();
});


app.get('*', function(req, res){
    res.status(400).send({
        message: "what???",
        status: 404
    });
});

app.listen(port, () => {
    console.log(`App successfully started on http://localhost:${port}/api`);
});