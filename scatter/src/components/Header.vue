<template>
  <el-page-header @back="goBack" content="detail"></el-page-header>
</template>
<script>
export default {
  methods: {
    goBack() {
      console.log("go back111");
    },
  },
};
</script>