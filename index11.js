require ('dotenv').config()

const express = require("express")
const cors = require("cors")
const asyncwrapper = require('./middlewares/asyncwrapper');






const app = express();

const mongoose = require("mongoose");
const httpsStatusText = require('./utils/httpsStatusText')

const url = process.env.MONGO_URL

mongoose.connect(url).then(() => {
    console.log('mongodb connect success')

})

app.use(cors())
app.use(express.json())

const usersRouter = require('./routes/users.route')
app.use('/api/users',usersRouter);

const patientRouter = require("./routes/patient.route");
app.use("/api", patientRouter);

const donorRouter = require('./routes/donor.route')
app.use('/api',donorRouter)




app.all('*',(req ,res , next) => {
    return res.status(404).json({status: httpsStatusText.ERROR, message: "this resource is not available"})
})

app.use((error, req, res, next) => {
    // res.json(error)
    res.status(error.statusCode || 500 ).json({status: error.satutsText || httpsStatusText.ERROR , message: error.message, code: error.statusCode || 500, data: null})
})

app.listen(process.env.PORT || 5000,()=>{
    console.log('listening on port: 5000' )
})
