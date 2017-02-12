import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
      doubleCounter: state => {
        return state.counter * 2;
      },
      stringCounter: state => {
        return state.counter + ' clicks';
      }
    },
    // Mutations must be synchronus! Can't have async code inside, because else can't track which mutation was responsible for each change in the mutation
    mutations: {
      increment: (state, payload) => {
        state.counter += payload;
      },
      decrement: (state, payload) => {
        state.counter -= payload;
      }
    },
    actions: {
      increment: (context, payload) => {
        context.commit('increment', payload.by);
      },
      decrement: (context, payload) => {
        context.commit('decrement', payload.by);
      },
      asyncIncrement: (context, payload) => {
        setTimeout(() => {
          context.commit('increment', payload.by);
        }, payload.duration);
      },
      asyncDecrement: (context, payload) => {
        setTimeout(() => {
          context.commit('decrement', payload.by);
        }, payload.duration);
      }
    }
});

