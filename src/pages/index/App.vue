<script setup>
import { reactive, ref } from 'vue'

const form = reactive({})

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
          ]
        },
        {
          label: 'Support rod connectors',
          opts: [
            'Stainless steel',
            'White PVC',
            'Black PVC'
          ]
        },
        {
          label: 'Steamer',
          opts: [
            'SS-2.6L 1000W',
            'SS-3L White 1500W',
            'SS-3L Black 1500W',
            'SS-5L White 1200W',
            'SS-5L Black 1200W',
          ]
        },
        {
          label: 'Chair',
          opts: [
            'Chair with backrest',
            'Backless chair',
            'Bamboo sto0l',
          ]
        },
        {
          label: 'Waterproof pod thickness',
          opts: [
            '1mm',
            '2mm',
            '3mm',
          ]
        },

      ]

  }
])

const modelOpt = ref([])

let layer3Arr = ref([])

const typeChange = () => {
  modelOpt.value = data.find(item => item.type === form.type).model
  layer3Arr.value = data.find(item => item.type === form.type).optional
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
          <el-select v-model="form.model">
            <el-option v-for="item in modelOpt" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="layer3.label" :key="layer3.label" v-for="layer3 in layer3Arr">
          <el-radio-group class="btn_list" size="small">
            <el-radio class="rad" v-for="opt in layer3.opts" :key="opt" :value="opt" border>{{ opt }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-scrollbar>
    <div class="right">
      <el-image style="width: 500px; height: 500px"></el-image>
      <el-image style="width: 500px; height: 500px"></el-image>
    </div>

  </div>
  <div class="bottom">
      <el-image class="left_down"  src="/src/assets/椅子Bl0000.png"></el-image>
      <el-image class="main_img" src="/src/assets/方形-加棉0000.png"></el-image>
    <el-image class="right_down" src="/src/assets/5L黑色渲染图0000.png"></el-image>
  </div>
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

.middle {
  display: flex;
}

.left {
  width: 400px;
  margin-right: 10px;
  height: 500px;
}

.btn_list {
  //display: flex;
  //flex-direction: column;
}

.btn_list label {
  //margin: 5px;
}

.rad{
  margin-top: 5px;
}
</style>
