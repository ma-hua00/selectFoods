<template>
  <div class="select">
    <h2 style="text-align: center">请选择想要的外卖</h2>
    <div class="main">
      <el-col v-for="item in foods" :key="item" :span="5" style="margin: 20px 0;">
        <div class="item" :class="activeFoods.indexOf(item) !== -1 ? 'activeBorder' : ''" @click="selectItem(item)">
          <img :src="require('../assets/' + item + '.png')" style="width: 100%;height: 100px">
          <span style="font-size: 12px" :style="{color: activeFoods.indexOf(item) !== -1 ? '#409EFF' : '#000'}">{{item}}</span>
        </div>
      </el-col>
    </div>
    <el-row type="flex" justify="center" style="margin-top: 20px">
      <el-button type="primary" round @click="nextTick">下一步</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      foods: ['咖喱饭', '干锅', '杂粮煎饼', '淮南牛肉汤', '炒饭', '煲仔饭', '猪脚饭', '酸菜鱼', '鸡排饭', '麻辣烫', '黄焖鸡', '炸鸡', '汉堡', '螺蛳粉', '盖浇饭', '水饺', '煎饺'],
      activeFoods: [],
      show: false
    }
  },
  methods: {
    selectItem(item) {
      if (this.activeFoods.length === 0) {
        this.activeFoods.push(item)
      } else {
        this.activeFoods.every((activeItem, index) => {
          if (activeItem === item) {
            this.activeFoods.splice(index, 1)
            return false
          }
        })
        this.activeFoods.push(item)
      }
    },
    nextTick() {
      if (this.activeFoods.length < 8) {
        this.$message({type: 'warning', message: '请选择至少八个外卖'})
      } else {
        this.$store.commit('setFood', this.activeFoods)
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .select {
    .main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .item {
        text-align: center;
        border: 1px solid #ccc;
      }
    }
  }
  .activeBorder {
    border: 1px solid #409EFF!important;
  }
</style>