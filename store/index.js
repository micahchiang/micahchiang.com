import entriesData from '~/static/entriesinfo.json';

export const state = () => ({
  entries: [],
  entry: ''
});

export const mutations =  {
  setEntries(state, data) {
    state.entries = data;
  },
  setEntry(state, name) {
    state.entry = name;
  }
}

export const actions = {
  LOAD_ENTRIES({commit}) {
    const entries = entriesData.entries;
    commit('setEntries', entries);
  },
  LOAD_ENTRY({commit}, entryName) {
    commit('setEntry', entryName)
  }
}