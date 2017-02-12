import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 10
    },
    getters: {
      doubleCounter: state => {
        return state.counter * 2;
      },
      stringCounter: state => {
        return state.counter + ' clicks';
      },
      value: state => {
        return state.value
      }
    },
    // Mutations must be synchronus! Can't have async code inside, because else can't track which mutation was responsible for each change in the mutation
    mutations: {
      increment: (state, payload) => {
        state.counter += payload;
      },
      decrement: (state, payload) => {
        state.counter -= payload;
      },
      updateValue: (state, payload) => {
        state.value = payload;
      }
    },
    actions: {
      increment: (context, payload) => {
        // pass the name of the mutation you want to execute
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
      },
      updateValue: (context, payload) => {
        context.commit('updateValue', payload);
      }
    }
});

