<template>
  <div class="company_structure">
    <app-button></app-button>
    <router-link to="/company-structure/departments" tag="a">Departments</router-link>
    <div class="container">
      <app-list></app-list>
      <!-- <router-link to="/company-structure/employees/10" tag="a">Employees ID</router-link>
      <router-link to="/company-structure/employees/11" tag="a">Employees ID</router-link>-->
      <router-view></router-view>
    </div>
    <!-- <app-employee></app-employee> -->
  </div>
</template>

// HOW TO LOG ALL CHANGES IN THE COMPONENT???!!!

<script>
import List from "./employees/EmployeesList";
import AddButton from "./employees/AddNewEmployee";
//import Departments from "./employees/Departments";
//import Employee from "./employees/Employee";
import EmployeesListVue from "./employees/EmployeesList.vue";

export default {
  components: {
    appList: List,
    appButton: AddButton
    //appDepartments: Departments
    //appEmployee: Employee
  },
  created() {
    this.$store.dispatch("initializeEmployees");
  }
};
</script>

<style lang="scss" scoped>
.company_structure {
  background-color: #c2d1f0;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
</style>