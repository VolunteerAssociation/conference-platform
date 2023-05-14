<template>
  <view class="home">
    <view class="videoList">
      <view class="">
        <swiper indicator-dots autoplay circular>
          <swiper-item>

          </swiper-item>
        </swiper>
      </view>
    </view>
    <view>
      <uni-card :is-shadow="false" is-full>
        <text class="uni-h6">搜索栏组件，通常用于搜索商品、文章等。</text>
      </uni-card>
    </view>
    <view>
      <uni-swipe-action>
        <uni-swipe-action-item :disabled="true" :right-options="options">
          <view>SwipeAction 基础使用场景</view>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
  </view>
</template>

<script lang="js">
export default {
  data() {
    return {
      options: null
    }
  },
  onLoad(options) {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
@import url("./home.less");
</style>
