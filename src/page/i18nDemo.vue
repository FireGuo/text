
<template>
  <div class="hello">

    <!--    <div  v-if="imglist.length>0" v-for="item in imglist" :key="item.date">-->
    <!--      <img :src="item.thumbnail_pic_s"  />-->
    <!--      <el-button type="primary" size="small">{{item.author_name}}{{item.date}}</el-button>-->
    <!--    </div>-->

    <div class="title">{{$t('menu.home')}}</div>
    <input :placeholder="$t('content.main')" type="text">

    <el-button type="primary" @click="changeLanguage" size="small">切换</el-button>


  </div>
</template>

<script>
  // import "ol/ol.css";
  // import { Map, View } from "ol";
  // import TileLayer from "ol/layer/Tile";
  // import OSM from "ol/source/OSM";
  // import Image from 'ol/layer/Image'
  // import  './tiff.min'
  // import {Tiff} from './tiff.min'

  export default {
    name: "i18nDemo",
    data() {
      return {
        map: null,
        imglist:[]
      };
    },
    mounted() {
      // this.creatmap()



      // this.loadImage('../../static/pictif.tif');
      this.creat()





    },
    methods:{
      changeLanguage(){
        this.$confirm('确定切换语言吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let language=''
          if ( this.$i18n.locale === 'en' ) {
            this.$i18n.locale = 'zh';//关键语句
            language="切换为中文"
          }else {
            this.$i18n.locale = 'en';//关键语句
            language="切换为英文"

          }
          this.$message({
            type: 'success',
            message: language
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消切换'
          });
        });


        // if(this.$i18n.locale == 'en'){
        //   this.$i18n.locale = 'zh'
        //
        // }else{
        //   this.$i18n.locale = 'en'
        //
        //
        // }
      },
      creat(){

        this.$api.mock({}).then(res => {
            console.log(JSON.parse(res))
            let list =JSON.parse(res)
            this.imglist=list.articles

          }
        ).catch(res => {
            console.log(res)

          }
        )
      },
      loadImage(filename) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        xhr.open('GET', filename);
        xhr.onload = function (e) {
          var tiff = new Tiff({buffer: xhr.response});
          var width ='200px';
          var height ='200px';
          var canvas = tiff.toCanvas();
          if (canvas) {
            canvas.setAttribute('style', 'width:' + (width*0.3) +
              'px; height: ' + (height*0.3) + 'px');
            var elem = document.createElement("div");
            elem.innerHTML ='<div><a href="' + filename + '">' + filename +
              ' (width: ' + width + ', height:' + height + ')' +
              '</a></div>';
            document.body.append(elem);
            document.body.append(canvas);
          }
        };
        xhr.send();
      }

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    height: 50%;
    width: 50%;
  }
  .tiffimg{
    width: 50%;
    height: 300px;
    background: cornflowerblue;
  }


</style>
