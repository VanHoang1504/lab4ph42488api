const mongoose = require('mongoose')
const Scheme = mongoose.Schema;

const DistributorsSchema = new Scheme({
    name: {type: String}
},{
    timestamps: false
})

module.exports = mongoose.model('Distributors', DistributorsSchema);
