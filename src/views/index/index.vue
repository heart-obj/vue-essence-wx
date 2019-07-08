<template>
  <div class="box">
    <header class="hader-box"><img :src="bannerImg" alt="" srcset="" width="100%" height="100%"></header>
    <div class="rows-box">
      <div class="row-box">
        <div class="row-h">
          <div class="row-title-h">企业简介</div>
        </div>
        <div class="row-content">
          <div class="content-row">
            <div class="content-img-box">
              <img :src="introduceText[0].img" alt="" class="content-img" hspace="5" vspace="5" align="left">
            </div>
            <div class="content-text-box">
              <div>{{ introduceText[0].text }}</div>
            </div>
          </div>
          <div class="content-row2">
            <div class="content-text-box">
              <div>{{ introduceText[1].text }}</div>
            </div>
            <div class="content-img-box">
              <img :src="introduceText[1].img" alt="" class="content-img2" hspace="5" vspace="5" align="left">
            </div>
          </div>
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
      introduceText: [ // 简介（如需要修改内容请按照此排列文本内容）
        {
          text: '菁致教育科技（上海）有限公司是一家专注教育领域的运营服务机构，公司拥有美国、英国、加拿大等多家教育合作品牌，为早教、托育、幼儿园、K15及非学历教育等实体办学机构解决经营问题并创造菁致教育全面布局现代教育领域。',
          img: './static/indexImg/title_img.png'
        },
        {
          text: '通过搭建课程开发、运营管理、国际交流平台等，在全球范围内整合多渠道资源，全面提升合作伙伴的教育运营管理能力及资源使用效率，打造教育生态闭环，助力教育创新升级，提供极致专业的教育领域运营服务，打造全球卓越教育品牌。',
          img: './static/indexImg/title_img2.png'
        }
      ],
      bannerImg: './static/banner/banner1.png'
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
.row-h .row-title-h {
  font-size: 0.427rem;
  color: #bababa;
  font-family: '华文中宋';
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
.row-box .row-content .content-row,.content-row2 {
  width: 100%;
  display: inline-block;
  text-align: left;
  margin-top: 0.533rem;
  font-size: 0.333rem;
  color: #b1b1b1;
  display: flex;
  position: relative;
}
.row-box .row-content .content-row::after {
  display: inline-block;
  content: '';
  width: 8.267rem;
  height: 2.4rem;
  background: #414141;
  position: absolute;
  right: 0;
  bottom: -1.1rem;
  z-index: 1;
}
.row-box .row-content .content-row2 {
  margin-top: 1.6rem;
}
.content-row .content-img-box {
  width: 4.707rem;
  height: 5.067rem;
}
.content-img-box img {
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
  z-index: 2;
}
.content-row .content-text-box {
  width: calc(100% -  4.707rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.content-row2 .content-img-box {
  width: 3.2rem;
  height: 5.067rem;
}
.content-row2 .content-text-box {
  width: calc(100% -  3.3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
