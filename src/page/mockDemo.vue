<template>
  <div>
    <div v-if="imglist.length>0" v-for="item in imglist" :key="item.date">
      <img :src="item.thumbnail_pic_s"/>
      <el-button type="primary" size="small">{{item.author_name}}{{item.date}}</el-button>
    </div>
  </div>


</template>

<script>
  export default {
    name: "mockDemo",
    data() {
      return {
        imglist: []
      };
    },
    mounted() {
      this.creat()

    },
    methods: {
      creat() {

        this.$api.mock({}).then(res => {
            // console.log(JSON.parse(res))
            let list = JSON.parse(res)
            this.imglist = list.articles

          }
        ).catch(res => {
            // console.log(res)
          this.$message('服务器请求错误')

          }
        )
      },

    }
  }
</script>

<style scoped>

</style>
