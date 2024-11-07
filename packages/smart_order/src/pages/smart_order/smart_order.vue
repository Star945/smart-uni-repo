<template>
  <div class="smart-order.vue">
    测试页面
    <view class="btn-area">
      <navigator
        url="/pages/smart_order/order_detail?title=navigate"
        hover-class="navigator-hover"
      >
        <button type="default">跳转到详情页面</button>
      </navigator>
      <!-- <navigator
        url="redirect/redirect?title=redirect"
        open-type="redirect"
        hover-class="other-navigator-hover"
      >
        <button type="default">在当前页打开</button>
      </navigator> -->
      <navigator
        url="pages/index/index"
        open-type="switchTab"
        hover-class="other-navigator-hover"
      >
        <button type="default">跳转tab页面</button>
      </navigator>
    </view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
}
</script>

<style scoped></style>
