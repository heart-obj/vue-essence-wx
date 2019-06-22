<template>
  <div class="box">
    <div class="rows-box">
      <div class="row-box" v-for="(item, i) in policData" :key="i" :style="{'background': 'url('+ item.imgUrl +') no-repeat center'}" @click="openInUrl(item)">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Policy', // 政策法规
  data () {
    return {
      policData: [
        {
          text: '名促法',
          imgUrl: './static/policyimg/policy_bg1.png',
          openUrl: ''
        },
        {
          text: '幼儿园法规',
          imgUrl: './static/policyimg/policy_bg2.png',
          openUrl: ''
        },
        {
          text: 'K15法规',
          imgUrl: './static/policyimg/policy_bg3.png',
          openUrl: ''
        },
        {
          text: '非学历培训法规',
          imgUrl: './static/policyimg/policy_bg4.png',
          openUrl: ''
        }
      ]
    }
  },
  methods: {
    openInUrl (item) {
      console.log('跳转链接' + item.openUrl)
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
}
.box .rows-box {
  width: 9.4rem;
  display: inline-block;
  margin-bottom: 0.32rem;
}
.rows-box .row-box {
  width: 100%;
  height: 2.853rem;
  margin-top: 0.32rem;
  background-size: 100% 100% !important;
  border-radius: 7px;
  font-size: 0.853rem;
  color: #ffffff;
  line-height: 2.853rem;
  text-align: left;
  box-sizing: border-box;
  padding-left: 0.6rem;
}
</style>
