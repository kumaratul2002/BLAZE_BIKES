import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dbConnection from './db.js';
import cyclesRoute from './routes/cyclesRoute.js';
import usersRoute from './routes/usersRoute.js';
import bookingsRoute from './routes/bookingsRoute.js';

const app = express();
const port = process.env.PORT || 5000;

// Get __dirname equivalent in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors("*"));
app.use('/api/cycles/', cyclesRoute);
app.use('/api/users/', usersRoute);
app.use('/api/bookings/', bookingsRoute);

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
}

// Export for Vercel
export default app;