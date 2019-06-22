<template>
  <div class="box">
    <div class="row-box">
      <div class="row-h">请填写您的联系方式</div>
      <div class="form-box">
        <mt-field label="用户名" placeholder="请输入您的用户名" v-model="fromData.userName"></mt-field>
        <mt-field label="手机号" placeholder="请输入您的手机号" type="tel" v-model="fromData.userNum"></mt-field>
        <mt-field label="邮箱" placeholder="请输入您的电子邮箱" type="email" v-model="fromData.email"></mt-field>
        <mt-field label="公司名称" placeholder="请输入您的公司名称" v-model="fromData.companyName"></mt-field>
        <mt-field label="职位" placeholder="请输入您的公司职位" v-model="fromData.position"></mt-field>
        <mt-field label="需求或建议" placeholder="请输入您的需求或建议" type="textarea" rows="4" v-model="fromData.text"></mt-field>
      </div>
      <div class="submit-btn">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConsultAndAdvice', // 咨询建议
  data () {
    return {
      fromData: {
        userName: null,
        userNum: null,
        email: null,
        companyName: null,
        position: null,
        text: null
      }
    }
  },
  methods: {
    submitFrom () {}
  }
}
</script>
<style scoped>
.box {
  width: 100%;
}
.box .row-box {
  width: 9.4rem;
  display: inline-block;
  margin: 0.32rem 0;
}
.mint-cell {
  background: none;
}
.form-box>>>.mint-cell-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-box>>>.mint-cell-title {
  display: inline-block;
  width: 100%;
  text-align: left;
  padding: 0.267rem 0;
  font-size: 0.373rem;
  color: #b1b1b1;
}
.form-box>>>.mint-cell-value {
  display: inline-block;
  width: 100%;
  position: relative;
}
.form-box>>>.mint-field-core {
  padding: 0.32rem 0.4rem;
  display: inline-block;
  box-sizing: border-box;
  font-size: 0.373rem;
  color: #ffffff;
  background: #7c776e;
}
.form-box>>>.mint-field-core::-webkit-input-placeholder {
  color: #ffffff;
}
.form-box>>>.mint-field-clear {
  width: 0.32rem;
  height: 0.32rem;
  display: inline-block;
  opacity: 2;
  position: absolute;
  right: 0.2rem;
  top: 0;
  bottom: 0;
  margin: auto;
}
.submit-btn {
  width: 2.933rem;
  height: 0.64rem;
  border-radius: 0.64rem;
  color: #ffffff;
  line-height: 0.64rem;
  display: inline-block;
  background: #e3cea8;
  margin-top: 0.6rem;
}
</style>
