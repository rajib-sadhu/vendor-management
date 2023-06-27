import mongoose from "mongoose";

const connectSchema = new mongoose.Schema({
    vendor_name: {
        type: String,
        require: true
    },
    bank_account: {
        type: String,
        require: true
    },
    bank_name: {
        type: String,
        require: true
    },
    address_1: {
        type: String,
        require: true
    },
    address_2: {
        type: String,
    },
    city: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    zip: {
        type: String,
        require: true
    }

}, {
    timestamps: true
});



const Connect = mongoose.models.Connect || mongoose.model('Vendors', connectSchema)

export default Connect