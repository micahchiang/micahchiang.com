import Vuex from 'vuex';
import entriesData from '~/static/entriesinfo.json';

const store = () => {
  return new Vuex.Store({
    state: {
      entries: [],
      entry: ''
    },
    mutations: {
      setEntries(state, data) {
        state.entries = data;
      },
      setEntry(state, name) {
        state.entry = name;
      }
    },
    actions: {
      LOAD_ENTRIES({ commit }) {
        const entries = entriesData.entries;
        commit('setEntries', entries);
      },
      LOAD_ENTRY({ commit }, entryName) {
        commit('setEntry', entryName);
      }
    }
  });
};

export default store;
