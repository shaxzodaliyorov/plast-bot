import { connect } from "mongoose";


export async function app(){
    try {
        const result = await connect("mongodb+srv://shaxzodaliyorov0202:VqEFvwjOi7MxSEGM@cluster0.ncsprbr.mongodb.net/")    
        if(result){
            console.log('succes fully connected');       
        } 
    } catch (error) {
         console.log(error);
    } 
}
