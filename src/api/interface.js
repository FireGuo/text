/*
 * @Description:
 * @Author: Wang Xin
 * @Date: 2019-08-07 17:14:20
 * @LastEditors: Wang Xin
 * @LastEditTime: 2019-08-16 15:24:23
 */
import axios from './api' // 倒入 api
import mockdata from '../components/mock'
/**
 * @author WX
 * @date 2019/7/15
 * @param {*} url  接口地址
 * @param {*} params  接口携带参数
 * @param {*} method  请求方式
 * @param {*} module  指api地址   参考config.js 中 baseUrl
 * @Description: 接口
 */
// 单独倒出
export const getUserInfo = params => {
    return axios({
        url: '/sys/role/selecti',
        method: 'get',
        params
    })
};



export const mock = params => {
    return axios({
        module:'blank',
        url: 'msg',
        method: 'get',
        params
    })
};

export const upload = data => {
    return axios({
        url: '/sug',
        method: 'post',
        data
    })
};

/*
 *param uuid=2313
 */
export const get_validate_pic = params => {
    return axios({
        url: 'http://202.108.199.7:8080/RJJHPTShiro/captcha.jpg',
        method: 'get',
        params
    })
};

export const login = data => {
    return axios({
        url: 'http://202.108.199.7:8080/RJJHPTShiro/sys/login',
        method: 'post',
        data
    })
};

export const get_usr_info = data => {
    return axios({
        url: 'http://202.108.199.7:8080/RJJHPTShiro/sys/user/info',
        method: 'get',
        params: data
    })
};

export const upload_info = (id, data) => {
    return new Promise(resolve => {
        axios({
            url: 'http://202.108.199.7:80/hyrj-0.0.1-SNAPSHOT/getInfo/UserAttentionSelect',
            method: 'post',
            data: {
                id: id
            }
        }).then(res => {
            let up_res = JSON.parse(res);
            if (up_res.code == 400) {
                //未查询到数据
                axios({
                    url: 'http://202.108.199.7:80/hyrj-0.0.1-SNAPSHOT/getInfo/UserAttentionUpdate',
                    method: 'post',
                    data
                }).then(res => {
                    // console.log(res);
                    resolve(res)
                })
            } else {
                data.token = data.token;
                data.bounds = up_res.data[0].bounds ? up_res.data[0].bounds : '';
                data.gctype = up_res.data[0].gctype ? up_res.data[0].gctype : '';
                data.sktype = up_res.data[0].sktype ? up_res.data[0].sktype : '';
                //查询到数据应该是更新之前的token数据
                axios({
                    url: 'http://202.108.199.7:80/hyrj-0.0.1-SNAPSHOT/getInfo/UserAttentionUpdate',
                    method: 'post',
                    data
                }).then(res => {
                    // console.log(res);
                    resolve(res);
                })
            }

        })
    }, rej => {

    })


};

// 默认全部倒出
// 根绝需要进行
export default {
    getUserInfo,
    mock,
    upload,
    get_usr_info
}
