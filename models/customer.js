const mongoose = require('mongoose')

const db = 'mongodb://localhost:27017/customerDB'
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).catch(err =>  console.log(err))


let customerSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    phone_number: String,
    image: String,
    address: String
})

let Customer = mongoose.model("customers",customerSchema)

module.exports = Customer

module.exports.saveCustomer = function(model,data) {
    model.save(data)
}