import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://debalinadas052004:987654321@cluster0.2zetk.mongodb.net/food-app').then(()=>console.log("DB Connected"));
}

