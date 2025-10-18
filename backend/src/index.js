import dotenv from 'dotenv/config';
import { app } from './app.js';
import { connectDB } from './config/db.js';


const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})