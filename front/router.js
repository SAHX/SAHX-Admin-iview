export default[
    {
        path: '/',
        name: 'home',
        component: resolve => {
            require.ensure(['./views/index/index.vue'], () => {
                resolve(require('./views/index/index.vue'))
            })
        }
    },
    {
        path: '/order',
        name: 'order',
        component: resolve => {
            require.ensure(['./views/order/index.vue'], () => {
                resolve(require('./views/order/index.vue'))
            })
        }
    }
]

