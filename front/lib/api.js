/**
 * Created by tangjiang on 2017/8/1.
 */
export default {
    install(Vue, axios){
        Vue.prototype.$api = (api,url,data,callback) => {
            axios.post('/common/request', {
                api:api,
                url:url,
                params:data
            }).then(response => {
                if(response.data.error_code === 5){
                    alert('登录过期，请先登录！');
                    window.location.href='/login';
                    return;
                }
                callback(response.data)
            }).catch(err => {
                console.log(err)
            })
        };

        Vue.prototype.$apiThink = (url, data, callback) => {
            axios.post(url, {url:url, params:data}).then(response => {
                callback(response.data)
            }).catch(error => {
                callback(error)
            })
        };

        Vue.prototype.$http = axios;
    }
}