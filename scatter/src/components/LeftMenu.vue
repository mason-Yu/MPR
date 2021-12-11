
<template>
    <el-row>
    <el-col>
    <el-menu
        class="el-menu-vertical-demo"
           background-color="#E9EEF3"
           text-color="black" router>
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>{{ item.navItem }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'LeftMenu',
  	data() { 
  		return { 
  			navList:[ 
  			{name:'/view/ServiceHall',navItem:'服务大厅'}, 
  			{name:'/view/Management',navItem:'权限管理'},
  			{name:'/view/User',navItem:'用户管理'}, 
  			{name:'/view/Personnel',navItem:'人员数据'}, 
  			{name:'/view/Alarm',navItem:'报警中心'}, 
        {name:'/view/SingleTest',navItem:'在线测试'}, 
  			] } 
  	}
  }
</script>

<style>
  .el-menu-vertical-demo{
    height: 645px
  }
</style>
