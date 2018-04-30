import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import systemManage from './modules/system-manage';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        app,
        systemManage
    }
});

export default store;
