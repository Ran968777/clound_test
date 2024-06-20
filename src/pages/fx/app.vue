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
    <div class="left">
      <el-image style="width: 500px; height: 500px" :src="imgUrlObj.blUrl"></el-image>
      <el-image style="width: 500px; height: 500px" :src="imgUrlObj.structUrl"></el-image>
    </div>
    <div class="right">
      <div class="but_list">
        <p>布料</p>
        <el-radio v-model="blBtn" @change="changeImg(0)" label="jm">夹棉</el-radio>
        <el-radio v-model="blBtn" @change="changeImg(0)" label="njb">牛津布</el-radio>
        <p>框架</p>
        <el-radio v-model="structBtn" @change="changeImg(1)" label="bxg">不锈钢</el-radio>
        <el-radio v-model="structBtn" @change="changeImg(1)" label="bs">白pvc</el-radio>
        <el-radio v-model="structBtn" @change="changeImg(1)" label="hs">黑pvc</el-radio>

        <!--        <el-button @click="changeImg(1,'bs')">方形-白色</el-button>-->
        <!--        <el-button @click="changeImg(1,'hs')">方形-黑色</el-button>-->
        <!--        <el-button @click="changeImg(1,'bxg')">方形-不锈钢</el-button>-->
        <!--        <el-button @click="changeImg(0,'jm')">方形-加棉</el-button>-->
        <!--        <el-button @click="changeImg(0,'njb')">方形-牛津布</el-button>-->
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
}

.left {
  display: flex;
}

.but_list {
  display: flex;
  flex-direction: column;
}

.but_list button {
  margin: 10px;
}
</style>