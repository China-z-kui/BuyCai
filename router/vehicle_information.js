const express = require('express');
//引入连接池
const pool = require('../pool.js')

const router=express.Router()

router.use( express.urlencoded({
	extended:true
}))
//const app=express()
router.get('/list',(req,res,next)=>{
  
    var obj=req.query
  
   pool.query('select * from vehicle_information order by sales_volume desc',[obj],(err,r)=>{
    if(err){
        return next(err)
    }
    console.log(r)
    res.send({code:200,msg:'用户列表',data:r})

   })
 })
 

module.exports=router
