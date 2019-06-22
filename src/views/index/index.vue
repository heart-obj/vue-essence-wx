<template>
  <div class="box">
    <header class="hader-box"></header>
    <div class="rows-box">
      <div class="row-box">
        <div class="row-h">
          <div class="row-title"><span class="text-line left-line"></span>企业简介<span class="text-line right-line"></span></div>
        </div>
        <div class="row-content">
          <div class="content-row">
            <div class="content-img-box">
              <img src="./img/title_img.png" alt="" class="content-img" hspace="5" vspace="5" align="left">
            </div>
            <div class="content-text-box">
              <div v-for="(item, i) in introduceText" :key="i" :style="{'margin-left': + (-0.8 + (0.1 * i)) +'rem','width': + ( 5.6 - (0.1 * i)) +'rem'}">{{ item }}</div>
            </div>
          </div>
          <div style="width: 100%;" class="textEnd">{{textEnd}}</div>
        </div>
      </div>
      <div class="row-box">
        <div class="row-content content-text-box2">
          <span style="font-size: 0.427rem;color: #ffffff;">企业愿景</span>
          <span style="font-size: 0.32rem;color: #ffffff;font-weight: 100;margin: 0.3rem 0;">成为最值得信赖的国际化教育运营服务商</span>
          <span style="font-size: 0.32rem;color: #ffffff;font-weight: 100;">创造卓越价值</span>
        </div>
      </div>
      <div class="row-box footer-box">
        <div class="row-h">
          <div class="row-title"><span class="text-line left-line"></span>企业价值观<span class="text-line right-line"></span></div>
        </div>
        <div class="row-content corporate-value-box">
          <div class="content-col">精进至诚</div>
          <div class="content-col">专业极致</div>
          <div class="content-col">拥抱变化</div>
          <div class="content-col">合作共赢</div>
        </div>
        <div class="row-content content-text-box2">
          <span style="font-size: 0.427rem;color: #ffffff;">人才理念</span>
          <span style="font-size: 0.32rem;color: #ffffff;font-weight: 100;margin-top: 0.3rem;">菁致教育倡导以人为本，客户第一，</span>
          <span style="font-size: 0.32rem;color: #ffffff;font-weight: 100;">要求员工具有良好的沟通能力、团队协作能力、</span>
          <span style="font-size: 0.32rem;color: #ffffff;font-weight: 100;">问题解决能力以及结果导向能力。</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index', // 首页
  data () {
    return {
      introduceText: [
        '菁致教育科技（上海）有限公司',
        '是一家专注教育领域的运营服务',
        '机构，公司拥有美国、英国、加',
        '拿大等多早教、托育、幼儿园、',
        'K15及非学历教育家教育合作品',
        '牌，为等实体办学机构解决经',
        '营问题并创造菁致教育全面布',
        '局现代教育领域，通过搭建课',
        '程开发、运营管理、国际交',
        '流平台等，在全球范围内整',
        '合多渠道资源，全面提升合'
      ],
      textEnd: '作伙伴的教育运营管理能力及资源使用效率，打造教育生态闭环，助力教育创新升级，提供极致专业的教育领域运营服务，打造全球卓越教育品牌。'
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
.row-box .row-content .content-row {
  width: 100%;
  display: inline-block;
  text-align: left;
  margin-top: 0.533rem;
  font-size: 0.333rem;
  color: #b1b1b1;
  display: flex;
}
.content-row .content-img-box {
  width: 4.707rem;
  height: 5.067rem;
}
.content-img-box img {
  width: 100%;
  height: 100%;
  margin: 0;
}
.content-row .content-text-box {
  width: calc(100% -  4.707rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content-text-box>div {
  width: 5.6rem;
  text-align: left;
}
.content-text-box>div:nth-child(1) {
  width: 5.6rem;
  margin-left: -0.947rem;
  text-align: left
}
.row-content .textEnd {
  width: 100%;
  display: inline-block;
  text-align: left;
  margin-top: 0.1rem;
  font-size: 0.333rem;
  color: #b1b1b1;
}
.row-box .content-text-box2 {
  width: 9.36rem;
  height: 4.267rem;
  background: url('./img/row_bg.png') no-repeat center;
  background-size: 100% 100%;
  margin-top: 0.933rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.row-box .corporate-value-box {
  width: 9.36rem;
}
.corporate-value-box .content-col {
  width: 4.68rem;
  float: left;
  font-size: 0.427rem;
  color: #fff;
  padding: 0.6rem 0;
}
.footer-box {
  padding-bottom: 1.2rem;
}
</style>
