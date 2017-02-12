import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 10
    },
    getters: {
      value: state => {
        return state.value
      }
    },
    // Mutations must be synchronus! Can't have async code inside, because else can't track which mutation was responsible for each change in the mutation
    mutations: {
      updateValue: (state, payload) => {
        state.value = payload;
      }
    },
    actions: {
      updateValue: (context, payload) => {
        context.commit('updateValue', payload);
      }
    },
    modules: {
      counter: counter
    }
});

