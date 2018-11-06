import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        addTask : false
    },
    mutations: {
        addTask(state) {
            state.addTask = true;
            console.log('change state');
        }
/*
        onShowAddTaskDialog(state) {
        },
*/
    },
    actions: {
        onShowAddTaskDialog(context) {
            //context.commit('onShowAddTaskDialog');
        },
    },
});
