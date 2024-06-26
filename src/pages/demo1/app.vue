<script setup>
import { reactive, ref } from 'vue'

// 框架radio 默认不锈钢
const structBtn = ref('bxg')
// 布料radio 默认布料
const blBtn = ref('jm')

const imgUrlObj = reactive({
  blUrl: getImageUrl('jm'),
  structUrl: getImageUrl('bxg')
})

function getImageUrl(name) {
  return new URL(`/src/assets/fx_${name}.png`, import.meta.url).href
}

/**
 *
 * @param type 0,布料,1框架
 */
const changeImg = (type) => {
  if (type === 1) {
    // imgUrlObj.structUrl = `src/assets/fx_${structBtn.value}.png`
    imgUrlObj.structUrl = getImageUrl(structBtn.value)
  } else {
    // imgUrlObj.blUrl  =  `src/assets/fx_${blBtn.value}.png`
    imgUrlObj.blUrl = getImageUrl(blBtn.value)
  }
}

</script>
<template>
  <div class="container">

  </div>
  <div class="bottom">
    <el-image class="left_down"  src="/椅子Bl0000.png"></el-image>
    <el-image class="main_img" src="/方形-加棉0000.png"></el-image>
    <el-image class="right_down" src="/5L黑色渲染图0000.png"></el-image>
  </div>
  <el-image src="/images/img.png"></el-image>
</template>

<style scoped>

.bottom{
  position: relative;
  width: 1000px; /* 调整容器宽度 */
  height: 1000px; /* 调整容器高度 */
}
.left_down{
  z-index: 2;
  position: absolute;
  left: 120px;
  bottom: 100px;

}
.main_img{
  z-index: 1;
  position: absolute;
}
.right_down{
  z-index: 2;
  position: absolute;
  left: 700px;
  bottom: 120px;
}
</style>