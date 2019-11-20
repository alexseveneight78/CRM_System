<template>
  <div class="structure">
    <div class="department">
      <h4>Top management</h4>
      <ul>
        <router-link
          v-for="employee in topManagement"
          :key="employee.id"
          :to="{ path: 'company-structure/employees/' + employee.id, name: 'employee', params: employee }"
        >
          <a href>{{ employee.firstName + ' ' + employee.lastName }}</a>
        </router-link>
      </ul>
    </div>
    <div class="department">
      <h4>Sales</h4>
      <ul>
        <li v-for="worker in sales">
          <a href>{{ worker }}</a>
        </li>
      </ul>
    </div>
    <div class="department">
      <h4>HR</h4>
      <ul>
        <li v-for="worker in HR">
          <a href>{{ worker }}</a>
        </li>
      </ul>
    </div>
    <div class="department">
      <h4>IT</h4>
      <ul>
        <li v-for="worker in IT">
          <a href>{{ worker }}</a>
        </li>
      </ul>
    </div>
    <div class="department">
      <h4>Accounting</h4>
      <ul>
        <li v-for="worker in accounting">
          <a href>{{ worker }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Employee from "./Employee";

export default {
  components: {
    appEmployee: Employee
  },
  data() {
    return {};
  },
  computed: {
    employees() {
      return this.$store.getters.employees;
    },
    topManagement() {
      return this.employees[0].filter(item => {
        return item.department === "Top management"
          ? item
          : null;
      });
    },
    sales() {
      return this.employees[0].map(item => {
        return item.department === "Sales"
          ? `${item.firstName + " " + item.lastName}`
          : "";
      });
    },
    HR() {
      return this.employees[0].map(item => {
        return item.department === "HR"
          ? `${item.firstName + " " + item.lastName}`
          : "";
      });
    },
    IT() {
      return this.employees[0].map(item => {
        return item.department === "IT"
          ? `${item.firstName + " " + item.lastName}`
          : "";
      });
    },
    accounting() {
      return this.employees[0].map(item => {
        return item.department === "Accounting"
          ? `${item.firstName + " " + item.lastName}`
          : "";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.structure {
  width: 80%;
  margin: 10px auto;
  padding: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .department {
    outline: 1px solid green;
    padding: 10px 15px;

    h4 {
      margin: 0;
      padding: 0;
    }
    ul {
      padding: 0;

      li {
        list-style-type: none;
        margin: 5px 0;

        a {
          color: green;
          text-decoration: none;
          &:hover,
          &:focus {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>