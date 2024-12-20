import mongoose from 'mongoose';


    const Connection = async () => {
        try {
          await mongoose.connect(process.env.DB_URL);
          console.log("Database is connected...");
        } catch (error) {
          console.log(`Error: ${error.message}`);
          process.exit(1);
        }
      };
    

export default Connection;