const state = {
  staff: [],
  employee: null,
};

const getters = {
  employee: (state) => {
    return state.employee;
  },
};

const actions = {
  selectEmployee({ commit }, empl) {
    commit("selectEmployee", empl);
  },
};

const mutations = {
  selectEmployee(state, empl) {
    state.employee = empl;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
