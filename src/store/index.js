import { createStore } from 'vuex'

export default createStore({
  state: {
    startNumber: 1,
    endNumber: 100,
    firstReplaceNumber: 2,
    firstReplaceText: 'Falabella',
    secondReplaceNumber: 5,
    secondReplaceText: 'IT',
    commonMultipleNumber: 15,
    commonMultipleText: 'Integraciones',
    stringsToReplace: [],
  },
  mutations: {
    updateCommonMultiple(state, payload) {
      state.commonMultipleNumber = payload;
    },
    updatestringsToReplace(state, payload) {
      state.stringsToReplace = payload;
    },
  },
  actions: {
    updateCommonMultiple({ commit, state }, payload) {
      payload = state.firstReplaceNumber * state.secondReplaceNumber;
      console.log(this.firstReplaceNumber);
      commit('updateCommonMultiple', payload);
    },
    generateList({ commit, state }, payload) {


      commit('updatestringsToReplace', payload);
    }
  },
  modules: {
  }
})
