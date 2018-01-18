// BASE SETUP
// =============================================================================

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');

const Foo = require('./app/models/foo');

// ROUTES FOR THE API
// =============================================================================
const router = express.Router();

router.use(function (req, res, next) {
    console.log('Request has been received...something\'s happening');
    next();
});

router.get('/test', function (req, res) {
    res.json({message: 'Hooray! The API is answering...'})
});

router.route('/foo')
    .post(function (req, res) {
        let foo = new Foo();
        foo.name = req.body.name;

        foo.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Foo created!'});
        });
    })
    .get(function (req, res) {
        Foo.find(function (err, foos) {
            if (err) {
                res.send(err);
            }
            res.json(foos);
        })
    });

router.route('/foo/:foo_id')
    .get(function (req, res) {
        Foo.findById(req.params.foo_id, function (err, foo) {
            if (err) {
                res.send(err);
            }
            res.json(foo);
        });
    })
    .put(function (req, res) {
        Foo.findById(req.params.foo_id, function (err, foo) {
            if (err) {
                res.send(err);
            }
            foo.name = req.body.name;

            foo.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({message: 'Foo Updated'});
            })
        })
    })
    .delete(function (req, res) {
        Foo.remove({
            _id: req.params.foo_id
        }, function (err, foo) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Foo Deleted Successfully!'});
        })
    });

// REGISTER ROUTES -------------------------------
// all of the routes will be prefixed with /api
// =============================================================================
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API Running on port ' + port);

