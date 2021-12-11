<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="URL">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="HTTP1.0">
      <el-select v-model="form.region" placeholder="please select your request">
        <el-option label="POST" value="POST"></el-option>
        <el-option label="GET" value="GET"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { articleList } from "@/api/article"
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      articleList({"":""})
      .then(res => {
        // 成功之后的操作
        console.log(res)
        })
        .catch(res => {
        // 失败时候的操作
        });
    },
  },
};
</script>