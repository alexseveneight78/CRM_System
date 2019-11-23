import users from "../../../dataFromServer/employees.js";

const state = {
  employees: {}
};

const getters = {
  employees: state => {
    return state.employees;
  }
};

const mutations = {
  setEmployees(state, users) {
    state.employees = users;
  }
};

const actions = {
  initializeEmployees: ({ commit }) => {
    commit("setEmployees", users);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
