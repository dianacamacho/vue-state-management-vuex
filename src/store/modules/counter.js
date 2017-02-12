const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' clicks';
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
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
  }
};

// export object with all vuex components
export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}