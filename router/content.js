const express = require('express');
//引入连接池
const pool = require('../pool.js')

const router=express.Router()

router.use( express.urlencoded({
	extended:true
}))
//const app=express()
router.get('/consult',(req,res,next)=>{
  
    var obj=req.query
  
   pool.query('select * from consult',[obj],(err,r)=>{
    if(err){
        return next(err)
    }
    console.log(r)
    res.send({code:200,msg:'信息内容',data:r})

   })
 })
 router.get('/consultone',(req,res,next)=>{
  
    var obj=req.query
  
   pool.query('select * from consult where cid=?',[obj.cid],(err,r)=>{
    if(err){
        return next(err)
    }
    console.log(r)
    res.send({code:200,msg:'信息内容',data:r})

   })
 })
 

module.exports=router
