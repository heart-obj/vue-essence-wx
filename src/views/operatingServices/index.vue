<template>
  <div class="box">
    <header class="hader-box"></header>
    <div class="rows-box">
      <div class="row-box">
        <div class="row-content">
          <div class="content-row">
            <div class="content-row-list">
              <div class="row-list-h">0-3岁幼儿托管</div>
              <div class="row-list-title">2020年同等学力申硕辅导班预报名开始 </div>
              <div class="row-list-text">教师要耐得住寂寞、清贫、教师要守住这片净土，你为什么选择教师这个行业?参加教师招考进行教师队伍你的动机是什么?你觉得..</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OperatingServices'
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
}
</style>
