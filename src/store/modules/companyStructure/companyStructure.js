import employeesData from "../../../dataFromServer/employees.js";

const state = {
  employees: []
};

const getters = {
  employees: state => {
    return state.employees;
  }
};

const mutations = {
  setEmployees(state, employeesData) {
    state.employees = employeesData;
  }
};

const actions = {
  initializeEmployees: ({ commit }) => {
    commit("setEmployees", employeesData);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
