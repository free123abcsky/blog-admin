import Cookies from 'js-cookie'
import api from '../api'
import Vue from "vue";

const systemManage = {
    state: {

    },
    mutations: {
        //设置登录状态
        setLoginStatus (state, status) {
            state.isLogin = !!status;
        },
        //注销
        logout (state, vm) {

            // 恢复默认样式
            let themeLink = document.querySelector('link[name="theme"]');
            themeLink.setAttribute('href', '');
            // 清空打开的页面等数据，但是保存主题数据
            let theme = '';
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }

            Vue.$localStorage.$delete('user');
        }
    },

    actions: {

    }
};

export default systemManage
