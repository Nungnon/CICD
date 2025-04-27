import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());  

app.get('/', (req, res) => {
    res.send('hello');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);  
});
