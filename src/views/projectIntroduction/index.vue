<template>
  <div class="box">
    <header class="hader-box"></header>
    <div class="rows-box">
      <div class="row-box">
        <div class="row-h">
          <div class="row-title"><span class="text-line left-line"></span>首次合作流程<span class="text-line right-line"></span></div>
        </div>
        <div class="row-content">
          <div class="content-row">
            <div class="content-row-col" v-for="(item, i) in processData" :key="i">
              <div class="content-row-col-h">{{ item.title }}</div>
              <div class="content-row-col-tag" ><span v-for="(tag, n) in item.tagArr" :key="n">{{ tag }}</span></div>
            </div>
          </div>
          <div class="content-row">
            <div class="content-row-list" v-for="(item, i) in projectArr" :key="i" @click="detailFunc">
              <div class="row-list-h">{{ item.title }}</div>
              <div class="row-list-title">{{ item.title2 }}</div>
              <div class="row-list-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectIntroduction', // 项目简介
  data () {
    return {
      processData: [
        {
          title: '合作意向沟通',
          tagArr: [ '需求', '资源', '权益' ]
        },
        {
          title: '《合作框架协议》签订',
          tagArr: null
        },
        {
          title: '项目场地初步评估',
          tagArr: [ '场地性质', '租赁信息', '初步市调' ]
        },
        {
          title: '开办主题设立',
          tagArr: null
        },
        {
          title: '项目资金到位',
          tagArr: null
        },
        {
          title: '项目方案制定',
          tagArr: [ '设计', '工程', '产品', '市场', '运营' ]
        },
        {
          title: '项目落地',
          tagArr: null
        }
      ],
      projectArr: [
        {
          title: '0-3岁幼儿托管',
          title2: '2020年同等学力申硕辅导班预报名开始',
          text: '教师要耐得住寂寞、清贫、教师要守住这片净土，你为什么选择教师这个行业?参加教师招考进行教师队伍你的动机是什么?你觉得'
        },
        {
          title: '3-6岁幼儿园',
          title2: '2020年同等学力申硕辅导班预报名开始',
          text: '教师要耐得住寂寞、清贫、教师要守住这片净土，你为什么选择教师这个行业?参加教师招考进行教师队伍你的动机是什么?你觉得'
        }
      ]
    }
  },
  methods: {
    detailFunc () {
      this.$router.push({
        name: 'OperatingServices',
        query: ''
      })
    }
  }
}
</script>
<style scoped>
.box {
  display: inline-block;
  width: 9.36rem;
}
.box  .hader-box {
  width: 9.36rem;
  height: 4.267rem;
  background: #e3cea8;
}
.box .rows-box {
  width: 100%;
  display: inline-block;
}
.rows-box .row-box {
  width: 100%;
  display: inline-block;
  margin-top: 0.3rem;
}
.row-box .content-row {
  width: 100%;
  margin-top: 0.63rem;
}
.row-box .row-h {
  width: 100%;
  display: inline-block;
}
.row-h .row-title {
  display: inline-block;
  height: 1.107rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.444rem;
  line-height: 1.107rem;
  border-bottom: 0.08rem solid #e3cea8;
  position: relative;
}
.row-h .row-title::after {
  content: '';
  display: inline-block;
  width: 0.08rem;
  height: 40%;
  background: #e3cea8;
  position: absolute;
  left: 0;
  bottom: 0;
}
.row-h .row-title::before {
  content: '';
  display: inline-block;
  width: 0.08rem;
  height: 40%;
  background: #e3cea8;
  position: absolute;
  right: 0;
  bottom: 0;
}
.row-title .text-line {
  display: inline-block;
  width: 0.267rem;
  height: 0.08rem;
  background: #e3cea8;
  position: absolute;
  bottom: 40%;
}
.row-title .left-line {
  left: 0;
}
.row-title .right-line {
  right: 0;
}
.content-row .content-row-col {
  width: 100%;
  height: 1.493rem;
  text-align: left;
  box-sizing: border-box;
  position: relative;
}
.content-row .content-row-col::after {
  content: '';
  display: inline-block;
  width: 1px;
  height: 1.493rem;
  background: #e3cea8;
  position: absolute;
  left: 0.813rem;
  top: 0.2rem;
}
.content-row .content-row-col:last-child::after {
  display: none;
}
.content-row-col .content-row-col-h {
  text-align: left;
  color: #ffffff;
  font-size: 0.373rem;
  padding-left: 1.947rem;
  position: relative;
}
.content-row-col .content-row-col-h::after {
  content: '';
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: #e3cea8;
  position: absolute;
  left: 0.613rem;
  top: 0;
  bottom: 0;
  margin: auto;

}
.content-row-col .content-row-col-tag {
  font-size: 0.32rem;
  color: #b1b1b1;
  padding-top: 0.267rem;
  padding-left: 1.947rem;
}
.content-row-col-tag span {
  margin-right: 0.4rem;
}
.content-row .content-row-list {
  width: 100%;
  padding: 0.533rem 0;
  text-align: left;
  border-bottom: 1px solid #787878;
}
.content-row-list .row-list-h {
  font-size: 0.4rem;
  height: 0.573rem;
  line-height: 0.573rem;
  color: #fff;
  padding-left: 0.773rem;
  position: relative;
}
.content-row-list .row-list-h::after {
  content: '';
  display: inline-block;
  width: 0.373rem;
  height: 0.573rem;
  position: absolute;
  background: url('./img/h_icon.png') no-repeat center;
  background-size: 100% 100%;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.content-row-list .row-list-title {
  font-size: 0.373rem;
  color: #ffffff;
  font-weight: 100;
  padding: 0.267rem 0;
}
.content-row-list .row-list-text {
  font-size: 0.32rem;
  font-weight: 100;
  color: #b1b1b1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
