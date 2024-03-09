import mongoose from "mongoose"

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"HOME_TEST"
    }).then(()=>{
        console.log("connection successfull");
    }).catch(()=>{
        console.log(`error connection failed ${err}`);
    })
}