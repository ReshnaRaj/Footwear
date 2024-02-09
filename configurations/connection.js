const mongoose=require('mongoose')
const dbConnection=async()=>{
    
    try{
        mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          .then(() => {
            console.log(process.env.DATABASE_URL)
            console.log("Database connected successfully");
          })
          .catch((err) => {
            console.log("Database error", err.message);
          });
      } catch (error) {
        console.log("Database error", error);
      }
    }

module.exports = dbConnection;