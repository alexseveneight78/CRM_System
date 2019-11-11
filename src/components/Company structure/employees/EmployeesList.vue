<template>
  <div class="list">
    <span>List</span>
    <input type="text" v-model="search" />
    <ul>
      <li v-for="item in filteredList" :key="item.id">
        <a href>{{ item.id + '. ' + item.firstName + ' ' + item.lastName }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // employees: [
      //   {
      //     id: 1,
      //     firstName: "Alex",
      //     lastName: "Alexandrov",
      //     employmentDate: "10.02.2018",
      //     email: "alex@gmail.com",
      //     mobile: "+3752985456589",
      //     salaryNetto: "800",
      //     salaryBrutto: "920",
      //     department: "Sales",
      //     position: "Sales manager"
      //   },
      //   {
      //     id: 2,
      //     firstName: "Boris",
      //     lastName: "Brok",
      //     employmentDate: "5.05.2015",
      //     email: "boris@gmail.com",
      //     mobile: "+3752985648974",
      //     salaryNetto: "500",
      //     salaryBrutto: "620",
      //     department: "IT",
      //     position: "IT manager"
      //   },
      //   {
      //     id: 3,
      //     firstName: "Chris",
      //     lastName: "Lart",
      //     employmentDate: "23.12.2017",
      //     email: "chris@gmail.com",
      //     mobile: "+375294561122",
      //     salaryNetto: "700",
      //     salaryBrutto: "820",
      //     department: "HR",
      //     position: "HR manager"
      //   },
      //   {
      //     id: 4,
      //     firstName: "Daniel",
      //     lastName: "Weltz",
      //     employmentDate: "11.09.2018",
      //     email: "daniel@gmail.com",
      //     mobile: "+375298977452",
      //     salaryNetto: "1800",
      //     salaryBrutto: "2120",
      //     department: "Top management",
      //     position: "TOP-manager"
      //   },
      //   {
      //     id: 5,
      //     firstName: "Lesley",
      //     lastName: "Grace",
      //     employmentDate: "19.10.2019",
      //     email: "lesley@gmail.com",
      //     mobile: "+375297845263",
      //     salaryNetto: "500",
      //     salaryBrutto: "620",
      //     department: "Accounting",
      //     position: "Accounting manager"
      //   },
      //   {
      //     id: 6,
      //     firstName: "Greal",
      //     lastName: "Grace",
      //     employmentDate: "15.03.2019",
      //     email: "greal@gmail.com",
      //     mobile: "+375297845264",
      //     salaryNetto: "500",
      //     salaryBrutto: "620",
      //     department: "Accounting",
      //     position: "Accounting manager"
      //   }
      // ],
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
      return this.$store.getters.employees.map(item => {
        console.log(item);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  border-right: 1px solid black;
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