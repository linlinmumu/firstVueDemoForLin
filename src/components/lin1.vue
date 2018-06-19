<template>
    <div>
      <h1>hello world</h1>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">{{input}}</div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "lin1",
      data() {
        return {
          input: ''
        }
      }
    }
</script>

<style scoped>

</style>
