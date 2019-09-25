// 倒入所有接口
import apiList from './interface'


//调用示例

// this.$api.接口名字({传参}).then(res=>{
//     console.log(res)
//
//   }
// ).catch(res=>{
//     console.log(res)
//
//   }
//
// )
const install = Vue => {
  if (install.installed)
    return;
  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiList
      }
    }
  })
}

export default install

