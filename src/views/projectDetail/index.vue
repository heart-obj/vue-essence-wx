<template>
  <div class="box">
    <header class="header-box">
      <div class="title">{{ headerData.title }}</div>
      <div class="title2">{{ headerData.titleEnglish }}</div>
      <div class="title2">{{ headerData.titleZH }}</div>
    </header>
    <div class="row-box">
      <div class="row-col-label" v-for="(item, i) in labelArr" :key="i">{{ item }}</div>
    </div>
    <div class="row-box">
      <div class="row-child-r" v-for="(item, i) in introduceData" :key="i">
        <div class="text-english">{{ item.textEnglish }}</div>
        <div class="text-ZH">{{ item.textZH }}</div>
      </div>
    </div>
    <div class="row-box">
     <div class="row-child-box" >
        <div class="title">{{ modulesTypeData.title }}</div>
        <div class="row-module-box" v-for="(item2, n) in modulesTypeData.list" :key="n">
          <div>{{ item2.title }}</div>
          <div v-for="(item3, o) in item2.childList" :key="o" style="margin-top: 0.4rem;">
            <div  v-for="(item4, a) in item3" :key="a">{{ item4 }}</div>
          </div>
        </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectDetail', // 项目详情介绍
  props: {},
  data () {
    return {
      headerData: { // 头部标题
        title: '上海莱克顿高中',
        titleEnglish: 'a boarding school with 310 years of British tradition',
        titleZH: '一所传承三百一十年教学传统的英式寄宿学校'
      },
      labelArr: [ // 标签
        '1:7 师生比',
        '13500 平方米',
        '16 人每班',
        '9 门主课',
        '8 个拓展课程',
        '12 项体育运动',
        '1 次赴英国总校学习体验',
        '10 间独立音乐练习室',
        '100% 寄宿',
        '4 项国际技能证书',
        '3 门第二外语的选择'
      ],
      introduceData: [ // 简介
        {
          textEnglish: 'Boarding is a special part of British education system. Boarding life provides students with unique  experiences.',
          textZH: '寄宿是英式教育系统中十分有特色的一部分。寄宿的生活可以让孩子感受到独一无二的成长体验。'
        },
        {
          textEnglish: 'Boarding in the UK gives students time to adjust to a different culture and different teaching style in a controlled environment before experiencing the freedom of university.',
          textZH: '寄宿在英国会给予学生更多的时间去适应不同的文化和不同的教学风格。在学校寄宿的好处是在可控的环境内可以让 学生提前适应在大学中自主的学习。'
        },
        {
          textEnglish: 'Experienced adults teach students to establish work patterns ready for university. Friends for life are made  and networking opportunities established.',
          textZH: '经验丰富的导师会教会学生如何为大学学习做好准备。同时学生们可以结交一生的挚友。在英式的寄宿环境下，学生们有充分的机会构建自己将来的人脉网络。'
        },
        {
          textEnglish: 'UK boarding schools act as a bridge between school and university setting up a second family and allowing  parents to feel fully involved in the choices made for their children.',
          textZH: '英式寄宿制学校会作为学生们通向大学的桥梁，在学校建立起学生们的第二个家。学校的寄宿氛围也会让家长们充分 参与到为孩子未来所做的决策中来。'
        }
      ],
      modulesTypeData: { // 课程介绍
        title: '课程：',
        list: [
          {
            title: 'Holistic education 全人教育',
            childList: [
              [
                'CORE CURRICULUM 核心课程',
                'Choose 3-4 courses from:  Mathematics 数学',
                'Further mathematics 进阶数学',
                'Physics 物理',
                'Chemistry 化学',
                'Business Studies 商业研究',
                'Economics 经济',
                'ICT information technology 信息技术',
                'Graphic design 平面设计',
                'Art 艺术'
              ],
              [
                'SUPER CURRICULUM 非凡课程',
                'Choose 2 from：',
                'Music 音乐',
                'Modern drama 戏剧',
                'Debate 辩论',
                'French 法语',
                'German 德语',
                'Design and process 设计',
                'STEM 科学、科技、工程、数学',
                'Field survival 野外生存'
              ],
              [
                'CO-CURRICULUM',
                '课外拓展课程',
                'Choose 2 from：',
                'Fencing 击剑',
                'Equestrian 马术',
                'Sailboat 帆船',
                'Canoeing 皮划艇',
                'Football 足球',
                'Tennis 网球',
                'Swimming 游泳',
                'Rugby 橄榄球',
                'Rock Climbing 攀岩',
                'Basketball 篮球'
              ]
            ]
          }
        ]
      }
    }
  },
  // 初始化数据
  created () {
    this.getInitData()
  },
  methods: {
    getInitData () {
      console.log('初始化请求数据！')
    }
  }
}
</script>
<style scoped>
.box {
  display: inline-block;
  width: 9.36rem;
}
.box .header-box {
  width: 100%;
  margin-top: 0.53rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box .row-box {
  width: 100%;
  margin-top: 0.53rem;
}
.header-box .title {
  font-size: 0.4rem;
  color: #ffffff;
  text-align: left;
}
.header-box .title2 {
  font-size: 0.373rem;
  color: #ffffff;
  text-align: left;
  margin-top: 0.4rem;
  font-weight: 100;
}
.row-box .row-col-label {
  float: left;
  width: 50%;
  box-sizing: border-box;
  text-align: left;
  font-size: 0.32rem;
  color: #e3cea8;
  position: relative;
  padding-left: 0.546rem;
  margin-bottom: 0.3rem;
}
.row-box .row-col-label::after {
  content: '';
  display: inline-block;
  width: 0.173rem;
  height: 0.173rem;
  background: #e3cea8;
  position: absolute;
  left: 0.173rem;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
}
.row-box .row-child-r {
  width: 100%;
  display: inline-block;
  text-align: left;
  font-size: 0.32rem;
  line-height: 0.5rem;
  margin-bottom: 0.667rem;
}
.row-child-r .text-english {
  color: #ffffff;
}
.row-child-r .text-ZH {
  color: #bababa;
  margin-top: 0.1rem;
}
.row-box .row-child-box {
  width: 100%;
}
.row-box .title {
  font-size: 0.4rem;
  color: #ffffff;
  text-align: left;
}
.row-box .row-module-box {
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  padding-left: 0.133rem;
  margin-bottom: 0.667rem;
}
.row-module-box>div {
  font-size: 0.32rem;
  color: #e3cea8;
  text-align: left;
  width: 100%;
}
</style>
