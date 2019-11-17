<template>
  <div class="employee">
    <h4>Employee component</h4>
    <p>Loaded ID: {{ $route.params.id }}</p>
    <ul>
      <li>First Name: {{ $route.params.firstName }}</li>
      <li>Last Name: {{ $route.params.lastName }}</li>
      <li>Date of employment: {{ $route.params.employmentDate }}</li>
      <li>Email: {{ $route.params.email }}</li>
      <li>Mobile phone: {{ $route.params.mobile }}</li>
      <li>Salary netto: {{ $route.params.salaryNetto }}$</li>
      <li>Salary brutto: {{ $route.params.salaryBrutto }}$</li>
      <li>Department: {{ $route.params.department }}</li>
      <li>Position: {{ $route.params.position }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  //   props: ["user"],
  data() {
    return {
      id: this.$route.params.id
    };
  },
  updated() {
    console.log("Component Employee is updated!", this.$route.params);
  }
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
.employee {
  border: 1px solid salmon;
  margin: 5px 10px;
  padding: 15px;

  ul {
    display: inline-block;
    //flex-direction: row;
    //flex-wrap: nowrap;
    padding: 0;

    li {
      list-style-type: none;
      outline: 1px dashed gray;
      padding: 5px 15px;
      margin: 10px 15px;
    }
  }
}
</style>