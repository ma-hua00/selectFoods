<template>
  <div class="home">
      <h1>今天吃点啥?</h1>
    <el-row type="flex" justify="center">
      <el-col :span="14">
        <el-carousel ref="carousel"  :interval="isScroll ? 250 : 0" type="card" height="350px" indicator-position="none" arrow="never">
          <el-carousel-item v-for="item in foods" :key="item">
            <div class="item">
              <img :src="require('../assets/' + item + '.png')" style="width: 100%;">
              <h3>{{item}}</h3>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <div class="button">
      <el-button @click="select" :loading="isScrolling">一键选择</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      isScroll: false,
      isScrolling: false,
      foods: ['咖喱饭', '干锅', '杂粮煎饼', '淮南牛肉汤', '炒饭', '煲仔饭', '猪脚饭', '酸菜鱼', '鸡排饭', '麻辣烫', '黄焖鸡']
    }
  },
  methods: {
    async select() {
      let that = this
      this.isScroll = true
      this.isScrolling = true
      setTimeout(() => {
        that.isScroll = false
        this.$refs.carousel.setActiveItem(Math.floor(Math.random() * 6))
        this.isScrolling = false
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    margin-top: 80px;
    text-align: center;
  }
  .button {
    margin-top: 40px;
    text-align: center;
  }
  .item {
    position: relative;
  }
  .item h3 {
    position: absolute;
    bottom: 0;
    left: 50%;
    font-size: 24px!important;
    color: #fff!important;
    transform: translateX(-50%);
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
