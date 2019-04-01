const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const {graphql} = require('graphql');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/');
mongoose.connection.once('open', () => {
    console.log("Connected to mongodb!");
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.post('/add-asset', (request, response) => {
    let query = `
        mutation {
            addAsset(name: "${request.body.name}", description: "${request.body.description}") {
                name,
                description
            }
        }
    `;
    graphql(schema, query).then((data) => {
      response.send(data);
    });
});

app.post('/add-task', (request, response) => {
    let query = `
        mutation {
            addTask(title: "${request.title}", description: "${request.description}") {
                title,
                description
            }
        }
    `;
    graphql(schema, query).then((data) => {
      response.send(data);
    });
});

app.post('/add-worker', (request, response) => {
    let query = `
        mutation {
            addAsset(name: "${request.name}", skillset: "${request.skillset}") {
                name,
                skillset
            }
        }
    `;
    graphql(schema, query).then((data) => {
      response.send(data);
    });
});

app.get('/assets/all', (request, res) => {
    let query = `
        {
            Assets {
                name,
                description
            }
        }
    `;
    graphql(schema, query).then((response) => {
        res.send(response);
    });
});

app.get('/get-tasks-for-worker/:uid', (request, res) => {
    console.log(request.params.uid);
    let query = `
        query {
            Worker(id: "${request.params.uid}"){
                tasks {
                  title
                }
            }
        }
    `;
    graphql(schema, query).then((response) => {
        res.send(response);
    });
});

app.listen(4000, () => {
    console.log("Now listening for requests");
});
