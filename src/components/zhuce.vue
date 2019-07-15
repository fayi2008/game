<template>
  <div id="index">
    <input type="text" v-model="username">
    <input type="text" v-model="pwd">
    <div @click="submit()">提交</div>
  </div>
</template>

<script>



export default {
  name: 'index',
  data () {
    return {
      username:'',
      pwd:''
    }
  },
  mounted () {

  },
  methods: {
    submit(){
      let that=this;
      this.$ajax.post('/api/setuser',{username:that.username,pwd:that.pwd}).then()
    }
  }
}
</script>

<style scoped>
#index {

}
input{
  display: block;
  height: 30px;
  border: 1px solid #ccc;
}

</style>