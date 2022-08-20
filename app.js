const express = require('express');
const cors = require('cors');
const  user=require('./router/user.js')
const  vip=require('./router/intendant.js')
const  car=require('./router/vehicle_information.js')
const  content=require('./router/content.js')
const  contentone=require('./router/content.js')
const app=express()


app.listen(3000)
app.use(cors())

//console.log(user)

app.use( express.urlencoded({
	extended:true
}))

app.use('/v1/users',user)
app.use('/v1/vip',vip)
app.use('/v1/car',car)
app.use('/v1/content',content)
app.use('/v1/contentone',contentone)

//错误处理中间件 
app.use((err,req,res,next)=>{
    //err 接收到的路由传递的错误
    console.log(err)
    res.send({code:500,msg:'服务器端错误'})
})
