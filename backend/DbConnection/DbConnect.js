import mongoose from "mongoose";
const dbconnection=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://manyasahu94:Manya123@cluster0.cbj0e6a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
");
        console.log("Connected");
    }catch(err){
        console.log("Not connected",err);
    }
}
export default dbconnection;


