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
          <a>{{ employee.firstName + ' ' + employee.lastName }}</a>
        </router-link>
      </ul>
    </div>
    <div class="department">
      <h4>Sales</h4>
      <ul>
        <router-link
          v-for="employee in sales"
          :key="employee.id"
          :to="{ path: 'company-structure/employees/' + employee.id, name: 'employee', params: employee }"
        >
          <a>{{ employee.firstName + ' ' + employee.lastName }}</a>
        </router-link>
      </ul>
    </div>
    <div class="department">
      <h4>HR</h4>
      <ul>
        <router-link
          v-for="employee in hr"
          :key="employee.id"
          :to="{ path: 'company-structure/employees/' + employee.id, name: 'employee',  params: employee }"
        >
        <a> {{ employee.firstName + ' ' + employee.lastName }}</a>
        </router-link>
      </ul>
    </div>
    <div class="department">
      <h4>IT</h4>
      <ul>
        <router-link
          v-for="employee in it"
          :key="employee.id"
          :to="{ path: 'company-structure/employees' + employee.id, name: 'employee', params: employee }"
        >
          <a>{{ employee.firstName + ' ' + employee.lastName }}</a>
        </router-link>
      </ul>
    </div>
    <div class="department">
      <h4>Accounting</h4>
      <ul>
        <router-link
          v-for="employee in accounting"
          :key="employee.id"
          :to="{ path: 'company-structure/employees' + employee.id, name: 'employee', params: employee }"
        >
          <a>{{ employee.firstName + ' ' + employee.lastName }}</a><br>
          </router-link>
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
      return this.employees[0].filter(item => {
        return item.department === "Sales"
          ? item
          : null;
      });
    },
    hr() {
      return this.employees[0].filter(item => {
        return item.department === "HR"
          ? item
          : null;
      });
    },
    it() {
      return this.employees[0].filter(item => {
        return item.department === "IT"
          ? item
          : null;
      });
    },
    accounting() {
      return this.employees[0].filter(item => {
        return item.department === "Accounting"
          ? item
          : null;
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