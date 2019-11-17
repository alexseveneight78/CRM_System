<template>
  <div class="employee">
    <h4>Employee component</h4>
    <button @click="editEmployee">Edit data</button>
    <button @click="saveEditedData">Save edited data</button>
    <p>
      Loaded ID:
      <span class="edit_employee">{{ $route.params.id }}</span>
    </p>
    <ul>
      <li>
        First Name:
        <span class="edit_employee">{{ $route.params.firstName }}</span>
      </li>
      <li>
        Last Name:
        <span class="edit_employee">{{ $route.params.lastName }}</span>
      </li>
      <li>
        Date of employment:
        <span class="edit_employee">{{ $route.params.employmentDate }}</span>
      </li>
      <li>
        Email:
        <span class="edit_employee">{{ $route.params.email }}</span>
      </li>
      <li>
        Mobile phone:
        <span class="edit_employee">{{ $route.params.mobile }}</span>
      </li>
      <li>
        Salary netto:
        <span class="edit_employee">{{ $route.params.salaryNetto }}$</span>
      </li>
      <li>
        Salary brutto:
        <span class="edit_employee">{{ $route.params.salaryBrutto }}$</span>
      </li>
      <li>
        Department:
        <span class="edit_employee">{{ $route.params.department }}</span>
      </li>
      <li>
        Position:
        <span class="edit_employee">{{ $route.params.position }}</span>
      </li>
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
  },
  methods: {
    editEmployee() {
      let data = document.querySelectorAll(".edit_employee");
      console.log(typeof data);
      for (let key in data) {
        data[key].contentEditable = true;
      }
    },
    saveEditedData() {}
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

  span {
    font-weight: bold;
  }

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