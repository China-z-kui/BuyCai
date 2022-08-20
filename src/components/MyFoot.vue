<template>
  <div class="tail">
    <div class="foot">
      <div class="foot_logo"><img src="../assets/footer-logo.png" alt="" /></div>
      <div class="foot_content">
        <dl>
          <dt>用户热搜</dt>
          <dt>汽车销量</dt>
          <dt>新能源销量</dt>
          <dt>汽车保有量</dt>
          <dt>新车成交价</dt>
          <dt>车型库</dt>
          <dt>汽车行业报告</dt>
        </dl>
        <dl>
          <dt>行业动态</dt>
          <dt>新能源汽车</dt>
          <dt>市场销售</dt>
          <dt>智能网联</dt>
          <dt>新车上市</dt>
          <dt>新能源供应链</dt>
          <dt>汽车投融资</dt>
        </dl>
        <dl>
          <dt>达示数据</dt>
          <dt>数据超市</dt>
          <dt>API产品</dt>
          <dt>行业报告</dt>
          <dt>行业动态</dt>
          <dt>关于我们</dt>
        </dl>
      </div>
           
    </div>
    <div class="guo">
        <span>Copyright © 2009-2020 广州威尔森信息科技有限公司 All rights reserved. | 粤ICP备09206296号  </span>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tail {
    background-color: #171920;
}
.foot {
 width: 1184px;
    padding: 48px 0 20px;
    height: 300px;
    margin: 0 auto;
    display: flex;
  
}
.foot_content dt {
  user-select: none;
  font-size: 10px;
  color: rgb(158, 152, 152);
  padding: 10px 0px;
  margin: 0 100px;
}
.foot_logo img{
    padding-top: 30px;
    width: 150px;
    height: 40px;
}
.foot_content{
    display: flex;   
}
.guo {
    border-top: 1px solid white;
    text-align: center;
    padding: 20px;
}
</style>