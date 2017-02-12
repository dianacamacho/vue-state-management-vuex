import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
// * syntax makes a js object with name actions (or whatever you want it to be) where all the exported valus are then properties of that object 

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 10
    },
    getters,
    // Mutations must be synchronous! Can't have async code inside, because else can't track which mutation was responsible for each change in the mutation
    mutations,
    actions: actions,
    modules: {
      counter: counter
    }
});

