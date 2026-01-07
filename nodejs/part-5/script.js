import express from 'express'
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(function (req, res, next) {
    console.log("about page hai ye");
    next();
});

app.get('/', (req, res) => {
    //   res.send('My name is Bharat');
    return next();
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})