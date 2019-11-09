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
export default {
  data() {
    return {
      employees: [
        {
          id: 1,
          firstName: "Alex",
          lastName: "Alexandrov",
          employmentDate: "10.02.2018",
          email: "alex@gmail.com",
          mobile: "+3752985456589",
          salaryNetto: "800",
          salaryBrutto: "920",
          department: "Sales",
          posotion: "Sales manager"
        },
        {
          id: 2,
          firstName: "Boris",
          lastName: "Brok",
          employmentDate: "10.02.2018",
          email: "alex@gmail.com",
          mobile: "+3752985456589",
          salaryNetto: "800",
          salaryBrutto: "920",
          department: "Sales",
          posotion: "Sales manager"
        },
        {
          id: 3,
          firstName: "Chris",
          lastName: "Lart",
          employmentDate: "10.02.2018",
          email: "alex@gmail.com",
          mobile: "+3752985456589",
          salaryNetto: "800",
          salaryBrutto: "920",
          department: "Sales",
          posotion: "Sales manager"
        },
        {
          id: 4,
          firstName: "Daniel",
          lastName: "Weltz",
          employmentDate: "10.02.2018",
          email: "alex@gmail.com",
          mobile: "+3752985456589",
          salaryNetto: "800",
          salaryBrutto: "920",
          department: "Sales",
          posotion: "Sales manager"
        }
      ],
      search: ""
    };
  },
  computed: {
    filteredList() {
      return this.employees.filter(item => {
        return (
          item.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
          item.lastName.toLowerCase().includes(this.search.toLowerCase())
        );
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