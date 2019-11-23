<template>
  <div class="list">
    <span>List</span>
    <input type="text" v-model="search" />
    <ul>
      <!-- <app-employee v-for="employee in filteredList" :key="employee.id" :user="employee">
        <router-link
          tag="a"
          :to="{ path: 'company-structure/employees/' + employee.id }"
        >{{ employee.firstName + ' ' + employee.lastName }}AAAAAAAAAAAAAAa</router-link>
      </app-employee>-->

      <router-link
        v-for="employee in filteredList"
        :key="employee.id"
        tag="li"
        :to="{ path: 'company-structure/employees/' + employee.id, name: 'employee', params: employee  }"
      >
        <a href>{{ employee.firstName + ' ' + employee.lastName }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Employee from "./Employee";

export default {
  components: {
    appEmployee: Employee
  },
  data() {
    return {
      search: ""
    };
  },
  // created() {
  //   axios
  //     .post("https://mybeecrm.firebaseio.com/employees.json", this.employees)
  //     .then(res => res);
  // },
  computed: {
    employees() {
      return this.$store.getters.employees;
    },
    filteredList() {
      return this.employees.filter(item => {
        return (
          item.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
          item.lastName.toLowerCase().includes(this.search.toLowerCase())
        );
        // fixed! 1) this.employees is an array with index 0;
        // 2) the list of employees is received from the server using an async request;
        // 3) getting a request from the server is better in THE 'CompanyStructure.vue' file while 'created'
      });
    }
  },
  updated() {
    console.log(this.$router.app);
  }
};
</script>

<style lang="scss" scoped>
.list {
  border: 1px solid black;
  //height: 100vh;
  padding: 10px 20px;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;
      margin-top: 5px;

      a {
        text-decoration: none;
        transition: 300ms;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>