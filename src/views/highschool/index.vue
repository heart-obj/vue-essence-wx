<template>
  <div class="box">
    <header class="hader-box"><img :src="bannerImg" alt="" srcset="" width="100%" height="100%"></header>
    <div class="rows-box">
      <div class="row-box">
        <div class="row-content">
          <div class="content-row">
            <div class="content-row-list">
              <div class="row-list-h">{{ titleObj.titleName }}</div>
            </div>
          </div>
          <div class="content-row">
            <div class="content-title">{{ specificationObj.title }}</div>
            <div class="content-module" v-for="(item, i) in specificationObj.modelList" :key="i">
              <div class="module-h">{{ item.title }}</div>
              <div class="module-row" v-for="(item2, n) in item.list" :key="n">
                <span class="module-row-title">{{ item2.title }}</span>
                <span class="module-row-text">{{ item2.data }}</span>
              </div>
            </div>
          </div>
          <div class="content-row">
            <div class="content-title">{{ flowData.title }}</div>
            <div class="content-module" v-for="(item, i) in flowData.modelList" :key="i">
              <div class="module-h">{{ item.title }}</div>
              <div class="module-rows">
                <div class="module-rows-row" v-for="(item2, n) in item.list" :key="n">
                  <div class="module-row-h">
                    <span class="bold-span">{{ item2.title }}</span>
                    {{item2.title2}}
                  </div>
                  <div class="module-content">
                    <span class="module-content-col" v-for="(item3, o) in item2.typeArr" :key="o">{{ item3 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OperatingServices', // 运营服务 （简介）
  data () {
    return {
      bannerImg: './static/banner/banner3.png',
      titleObj: { // 简介
        titleName: '高中'
      },
      specificationObj: { // 要求
        title: '场地要求',
        modelList: [
          {
            title: '高中',
            list: [
              {
                title: '用地面积',
                data: '2.7万平方米以上'
              },
              {
                title: '建筑面积',
                data: '1.4万平方米以上'
              },
              {
                title: '室外场地',
                data: '有体育活动用地和绿化用地'
              },
              {
                title: '土地性质',
                data: '教育用地、商业用地'
              },
              {
                title: '周边环境',
                data: '不得与集贸市场、医院传染病房、高压变配电所、公共交通枢纽、垃圾及污水处理站等场所毗邻'
              },
              {
                title: '消防',
                data: '合格'
              },
              {
                title: '租期',
                data: '3年以上'
              }
            ]
          }
        ]
      },
      flowData: { // 流程
        title: '筹建流程',
        modelList: [
          {
            title: '高中筹建时间表 (1年起）',
            list: [
              {
                title: '市调期',
                title2: '2周-1个月',
                typeArr: [
                  '选址',
                  '市场调查',
                  '可行性报告'
                ]
              },
              {
                title: '计划期',
                title2: '2个月',
                typeArr: [
                  '工程计划',
                  '市场计划（贯穿整个流程）',
                  '招聘计划',
                  '重要截点确认'
                ]
              },
              {
                title: '筹备期',
                title2: '8-12个月',
                typeArr: [
                  '工程报建',
                  '工程装修 (8-12个月，基于面积及工程特殊性）',
                  '教玩具采购(试运营前两周到位)'
                ]
              },
              {
                title: '申报期',
                title2: '2-3个月',
                typeArr: [
                  '资质文件准备(与工程同步进行)',
                  '窗口材料递交',
                  '员工培训(试运营前一个月内)'
                ]
              },
              {
                title: '试运营',
                title2: '工程完工至证件下发',
                typeArr: [
                  '环境布置',
                  '试运营',
                  '筹备开业活动'
                ]
              },
              {
                title: '正式开业',
                title2: '开业典礼',
                typeArr: []
              }
            ]
          }
        ]
      }
    }
  },
  // 数据初始化
  created () {
    this.initDataFunc()
  },
  // 定义方法
  methods: {
    initDataFunc () {
      console.log('接口调用，请求对应的项目简介')
    },
    queryProjectDetail () {
      this.$router.push({
        name: 'ProjectDetail',
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
}
.row-box .content-row {
  width: 100%;
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
.content-row .row-projectList {
  width: 100%;
  padding: 0.133rem 0;
  border-bottom: 1px solid #787878;
  display: flex;
  justify-content: space-between;
}
.row-projectList .project-img {
  width: 1.9rem;
  height: 1.9rem;
  background: #787878;
}
.row-projectList .project-img img {
  border: none;
  width: 100%;
  height: 100%;
  font-size: 0.16rem;
}
.row-projectList .project-text-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 0.133rem;
}
.project-text-box .project-h {
  font-size: 0.373rem;
  color: #ffffff;
  text-align: left;
}
.project-text-box .project-text {
  font-size: 0.32rem;
  color: #b1b1b1;
  text-align: left;
}
.content-row .content-title {
  font-size: 0.453rem;
  color: #ffffff;
  text-align: left;
  padding: 0.347rem 0;
  margin-top: 0.347rem;
}
.content-row .module-h {
  color: #ffffff;
  font-size: 0.427rem;
  padding: 0 0.733rem;
  position: relative;
  display: inline-block;
}
.content-row .module-h::after {
  content: '';
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background: #e3cea8;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.content-row .module-h::before {
  content: '';
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background: #e3cea8;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.content-module .module-row {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0;
}
.module-row .module-row-title {
  display: inline-block;
  width: 2.267rem;
  text-align: left;
  box-sizing: border-box;
  padding-left: 0.613rem;
  font-size: 0.32rem;
  color: #b1b1b1;
}
.module-row .module-row-text {
  display: inline-block;
  flex: 1;
  text-align: left;
  font-size: 0.32rem;
  color: #ffffff;
}
.module-rows .module-rows-row {
  text-align: left;
  margin-top: 0.667rem;
}
.module-rows .module-row-h {
  display: inline-block;
  font-size: 0.32rem;
  line-height: 0.32rem;
  color: #ffffff;
  text-align: left;
  position: relative;
  padding: 0.08rem 0.4rem 0.08rem 3rem;
  background: #e8a85c;
  border-radius: 0 0.32rem 0.32rem 0;
  height: 0.32rem;
}
.module-row-h .bold-span {
  display: inline-block;
  line-height: 1;
  font-size: 0.667rem;
  position: absolute;
  bottom: 0.08rem;
  left: 0.133rem;
}
.module-rows-row .module-content {
  width: 100%;
  box-sizing: border-box;
  padding-left: 0.533rem;
  padding-bottom: 0.533rem;
}
.module-content .module-content-col {
  display: inline-block;
  font-size: 0.32rem;
  color: #ffffff;
  position: relative;
  padding-left: 0.667rem;
  margin-top: 0.4rem;
}
.module-content .module-content-col::after {
  content: '';
  display: inline-block;
  width: 0.227rem;
  height: 0.227rem;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  left:  0.32rem;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
