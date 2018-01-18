const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FooSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Foo', FooSchema);