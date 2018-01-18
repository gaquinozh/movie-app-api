const router = require('express').Router();

// MOVIE ROUTE
// =============================================================================
// Todo: Implement Movie Route

// REVIEW ROUTE
// =============================================================================
// Todo: Implement Review Route

// GENRE ROUTE
// =============================================================================
const Genre = require('../models/genre');

router.route('/genre')
    .get(function (req, res) {
        Genre.find(function (err, genres) {
            if (err) {
                res.send(err);
            }
            res.json(genres.map((item) => {
                return {id: item._id, name: item.name}
            }));
        });
    });

// FOO ROUTE
// =============================================================================
const Foo = require('../models/foo');

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

module.exports = router;