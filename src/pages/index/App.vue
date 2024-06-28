<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  type: '',// 一级
  model: ''// 二级

})
// 显示的图片地址
const showImg = reactive({
  leftDown: '',
  main: '',
  rightDown: '',
  right: ''

})

const data = reactive([

  {
    type: 'Suna room',
    model: [
      'Square suna room',
      'Diamond suna room',
      'Hexagon suna room'
    ],
    optional:
      [
        {
          label: 'Fabric',
          opts: [
            '3layer with insulation quilted cloth',
            'Oxford cloth'
          ],
          type: null,
          imgPost: 'left'
        },
        {
          type: null,
          label: 'Support rod connectors',
          opts: [
            'Stainless steel',
            'White PVC',
            'Black PVC'
          ],
          imgPost: 'right'
        },
        {
          type: 'switch',
          label: 'Steamer',
          imgPost: 'right_down',
          opts: [
            'SS-2.6L 1000W',
            'SS-3L White 1500W',
            'SS-3L Black 1000W',
            'SS-5L White 1200W',
            'SS-5L Black 1200W'
          ]
        },
        {
          type: 'switch',
          label: 'Chair',
          imgPost: 'left_down',
          opts: [
            'Chair with backrest',
            'Backless chair',
            'Bamboo chairs'
          ]
        },
        {
          type: 'switch',
          label: 'Waterproof pod thickness',
          opts: [
            '1mm',
            '2mm',
            '3mm'
          ]
        }
      ]
  }
])

const modelOpt = ref([])

let layer3Arr = ref([])

const typeChange = () => {
  modelOpt.value = data.find(item => item.type === form.type).model
  layer3Arr.value = data.find(item => item.type === form.type).optional
}

const modelChange = (val) => {
  if (val === 'Square suna room' || val === 'Diamond suna room') {
    // showImg.main = '/images/fx/加棉.png'
    // showImg.right = '/images/fx/不锈钢.png'
    form['Fabric'] = '3layer with insulation quilted cloth'
    form['Support rod connectors'] = 'Stainless steel'
    radioChange('3layer with insulation quilted cloth', 'Fabric', 'left')
    radioChange('Stainless steel', 'Support rod connectors', 'right')
  }
}

const switchChange = (newVal, label, imgPost) => {
  if (imgPost === 'left_down') {
    showImg.leftDown = ''
  } else if (imgPost === 'right_down') {
    showImg.rightDown = ''
  }

}

const leftDownImg = ref()
const radioChange = (newVal, label, imgPost) => {
  if (imgPost === 'left') {
    // 修改main_img
    showImg.main = getImgUrl(newVal)
  } else if (imgPost === 'right') {
    showImg.right = getImgUrl(newVal)
  } else if (imgPost === 'left_down') {
    showImg.leftDown = getImgUrl(newVal)
    if (newVal === 'Chair with backrest') {
      leftDownImg.value.$el.style = 'left:92px'
    } else {
      leftDownImg.value.$el.style = 'left:135px'
    }
  } else if (imgPost === 'right_down') {
    showImg.rightDown = getImgUrl(newVal)
  }
}

const getImgUrl = (val) => {

  function getDir() {
    if (form.model === 'Square suna room') {
      return '/fx'
    } else if (form.model === 'Diamond suna room') {
      return '/diamond'
    }
  }

  let img = ''
  switch (val) {
    case '3layer with insulation quilted cloth':
      img = getDir() + '/加棉.png'
      break
    case 'Oxford cloth':
      img = getDir() + '/牛津布.png'
      break
    case 'Stainless steel':
      img = getDir() + '/不锈钢.png'
      break
    case 'White PVC':
      img = getDir() + '/白色PVC.png'
      break
    case 'Black PVC':
      img = getDir() + '/黑色PVC.png'
      break
    case 'SS-2.6L 1000W':
      img = '/fx/SS-2.6-1000W.png'
      break
    case 'SS-3L White 1500W':
      img = '/fx/3L白色.png'
      break
    case 'SS-3L Black 1000W':
      img = '/fx/3L黑色.png'
      break
    case 'SS-5L White 1200W':
      img = '/fx/5L白色渲染图0000.png'
      break
    case 'SS-5L Black 1200W':
      img = '/fx/5L黑色渲染图0000.png'
      break
    case 'Chair with backrest':
      img = '/fx/椅子Bl0000.png'
      break
    case 'Backless chair':
      img = '/fx/无靠背座椅.png'
      break
    case 'Bamboo chairs':
      img = '/fx/竹椅子.png'
      break
  }
  return '/images' + img
}
</script>

<template>
  <div style="text-align: center">
    <h3>Headline</h3>
  </div>
  <div class="middle">
    <el-scrollbar class="left">
      <el-form :model="form" label-position="top"
               label-width="auto">
        <el-form-item label="Type">
          <el-select v-model="form.type" @change="typeChange">
            <el-option v-for="item in data" :key="item.type" :label="item.type" :value="item.type"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Model">
          <el-select v-model="form.model" @change="modelChange">
            <el-option v-for="item in modelOpt" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :key="layer3.label" v-for="layer3 in layer3Arr">
          <template v-slot:label>
            <span>{{ layer3.label }}</span>
            <el-switch v-model="form[layer3.label+layer3.type]" style="margin-left: 10px;" v-if="layer3.type==='switch'"
                       @change="(newVal)=>{switchChange(newVal,layer3.label,layer3.imgPost)}"></el-switch>
          </template>
          <el-radio-group class="btn_list" size="small" v-model="form[layer3.label]"
                          v-show="layer3.type!=='switch' || form[layer3.label+layer3.type]">
            <el-radio class="rad" @change="(newVal)=>radioChange(newVal,layer3.label,layer3.imgPost)"
                      v-for="opt in layer3.opts"
                      :key="opt" :value="opt" border>{{ opt }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-scrollbar>
    <div class="img_div">
      <div class="container">
        <el-image class="left_down" ref="leftDownImg" v-show="showImg.leftDown" :src="showImg.leftDown"></el-image>
        <el-image class="main_img" v-show="showImg.main" :src="showImg.main"></el-image>
        <el-image class="right_down" v-show="showImg.rightDown" :src="showImg.rightDown"></el-image>
      </div>
      <div class="container_right">
        <el-image class="right" v-show="showImg.right" :src="showImg.right"></el-image>
      </div>
    </div>

  </div>
</template>

<style scoped>

.img_div {
  display: flex;
  width: auto;
}

.container {
  width: 800px;
  height: 1080px;
  position: relative;
}

.left_down {
  z-index: 2;
  position: absolute;
  left: 92px;
  //margin-left: 92px;
  bottom: 119px;

}

.main_img {
  z-index: 1;
  position: absolute;
  object-fit: cover;
  //width: 450px;
  height: auto;
  width: auto;
  left: 242px;
  top: 168px;
}

.right_down {
  z-index: 2;
  position: absolute;
  left: 632px;
  bottom: 134px;
  width: auto;
  height: auto;
}

.container_right {
  //margin-left: 237px;
  //width: auto;
  //width: 40%;
}

.right {
  margin-top: 168px;
  margin-left: 81px;
  object-fit: cover;
  width: 440px;
  height: auto;
}

.middle {
  display: flex;
}

.left {
  width: 400px;
  margin-right: 10px;
}

.btn_list {
  //display: flex;
  //flex-direction: column;
}

.btn_list label {
  //margin: 5px;
}

.rad {
  margin-top: 5px;
}
</style>
