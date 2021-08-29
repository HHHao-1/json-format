<template>
  <div class="request">
    <div class="test">
      <el-button class="button" type="primary" @click="request">确认</el-button>
      <el-button class="button" type="primary">预留</el-button>
      <br/>
      <el-input class="input" v-model="input" placeholder="请输入url"/>
    </div>
    <div class="json">
      <json-viewer
          :value="data"
          :expand-depth=99
          copyable
          boxed
          expanded
      ></json-viewer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'test',
  data() {
    return {
      data: null,
      path: 'res',
      deep: 3,
      input: '',
    }
  },
  methods: {
    request() {
      axios({
        method: 'post',
        url: '/validation/validate/getAllInfoByPerson?' + this.input,
        // data: {
        //   exchangeId: input //传给后台的body参数
        // }
      }).then(res => {
        //请求成功响应结果response
        this.data = JSON.parse(JSON.stringify(res.data));
      }).catch(err => {
        //请求异常响应结果
        console.log(err);
      });
    }
  },
}
</script>
<style lang="scss" scoped>
.request {

  .test {
    .button {
      margin: 30px 10px;
    }

    .input {
      width: 300px;
      margin: 0 0 20px 0;
    }
  }


  .json {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    text-align: left;

    .boxed {
      width: 70%;
    }
  }
}
</style>