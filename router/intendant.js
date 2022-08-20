const express = require('express');
//引入连接池
const pool = require('../pool.js')

const router=express.Router()

router.use( express.urlencoded({
	extended:true
}))
//const app=express()

//添加接口
router.post('/reg',(req,res,next)=>{
    var obj=req.body
    console.log(obj)
    if(!obj.uname){
        //响应的同时，阻止往后执行
       return  res.send({code:401,msg:'uname不能为空'})
    }
    if(!obj.upwd){
        return  res.send({code:402,msg:'upwd不能为空'})
    }
    
	pool.query('insert into Administrator set ?',[obj],(err,r)=>{
		if(err){
			return next(err)  
		}
		console.log(r)
		res.send({code:200,msg:'添加成功'})
	})

})
//删除接口
 router.delete('/s/:aid',(req,res,next)=>{
    pool.query(`delete from Administrator where aid=?`,[req.params.aid],(err,r)=>{
        console.log(r)

        if(err){
             return next (err)
        }
      if(r.affectedRows==0)
      {res.send({code:501,msg:'删除失败'})
     
      }else{
          res.send({code:200,msg:'删除成功'})
      }
    })

 })
//登录接口
 router.post('/login',(req,res,next)=>{
            console.log(req.body)
    pool.query(`select * from  Administrator where uname= ? and upwd=?`,[req.body.uname,req.body.upwd],(err,r)=>{
        if (err) {

            return next(err) 
        }
        console.log(r)
        if(r.length===0){
            res.send({code:501,msg:'登录失败'})
        }else{
            res.send({code:200,msg:'登录成功'})
        }

    })
})
//修改接口
router.put('/change',(req,res,next)=>{
    console.log(req.body)
    pool.query('update Administrator set?  where aid=?',[req.body,req.body.aid],(err,r)=>{
		if(err){
			return next(err)
		}
		console.log(r)
		//修改结果是对象，如果对象下的affectedRows为0说明修改失败，否则修改成功
		if(r.affectedRows===0){
			res.send({code:501,msg:'修改失败'})
		}else{
			res.send({code:200,msg:'修改成功'})
		}
	})
})
//查找接口
router.get('/list',(req,res,next)=>{
  
    var obj=req.query
    if(!obj.pno){
        obj.pno=1
    }
    if(!obj.count){ 
        obj.count=3 }
       
         console.log(req.query)
      var start =(Number (obj.pno)-1)*Number(obj.count ) 
      var size=Number(obj.count)  

   pool.query('select * from Administrator  limit ?,?',[start,size],(err,r)=>{
    if(err){
        return next(err)
    }
    console.log(r)
    res.send({code:200,msg:'用户列表',data:r})

   })
 })

module.exports=router


