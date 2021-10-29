<template>
  <div class="home">
    <h1>今天吃点啥?</h1>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-carousel ref="carousel"  :interval="isScroll ? 350 : 0" type="card" height="100px" indicator-position="none" arrow="never" @change="currentChange">
          <el-carousel-item v-for="item in foods" :key="item">
            <div class="item">
              <img :src="require('../assets/' + item + '.png')" style="width: 100%;height: 100px">
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
      foods: ['咖喱饭', '干锅', '杂粮煎饼', '淮南牛肉汤', '炒饭', '煲仔饭', '猪脚饭', '酸菜鱼', '鸡排饭', '麻辣烫', '黄焖鸡'],
      randomIndex: null,
      use: false
    }
  },
  methods: {
    select() {
      let that = this
      this.isScroll = true
      this.isScrolling = true
      this.randomIndex = Math.floor(Math.random() * this.foods.length)
      setTimeout(() => {
        this.use = true
      }, 5000)
    },
    currentChange(index) {
      if (!this.use) return
      if (this.randomIndex == index) {
        this.isScroll = false
        this.isScrolling = false
        this.use = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    margin: 40px;
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
    font-size: 12px!important;
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
