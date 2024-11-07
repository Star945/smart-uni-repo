<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
  <nut-button></nut-button>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
