import express from 'express';
import UserRoutes from './routes/UserRoutes';
import TweetRoutes from './routes/TweetRoutes';

const port  = 3000;
const app = express();
app.use(express.json());
app.use('/user',UserRoutes);
app.use('/user',TweetRoutes);

app.get('/' ,(req,res) => {
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server started succesfully at port ${port}`);
})