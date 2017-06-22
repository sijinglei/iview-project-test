const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/nav',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/nav.vue'], resolve),
        children: [{
            path: '/temp1',
            meta: {
                title: ''
            },
            component: (resolve) => require(['./views/temp1.vue'], resolve)
        }, {
            path: '/temp2',
            meta: {
                title: ''
            },
            component: (resolve) => require(['./views/temp2.vue'], resolve)
        }, {
            path: '/temp3',
            meta: {
                title: ''
            },
            component: (resolve) => require(['./views/temp3.vue'], resolve)
        }, {
            path: '/temp4',
            meta: {
                title: ''
            },
            component: (resolve) => require(['./views/temp4.vue'], resolve)
        }]
    }
];
export default routers;