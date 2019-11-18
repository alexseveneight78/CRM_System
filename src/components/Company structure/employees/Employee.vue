<template>
  <div class="employee">
    <h4>Employee component</h4>
    <button @click="isDisabled = !isDisabled">Edit data</button>
    <button @click="saveEditedData">Save edited data</button>
    <p>
      Loaded ID:
      <span>{{ $route.params.id }}</span>
    </p>
    <ul>
      <li>
        First Name:
        <input
          class="edit_employee"
          v-model="$route.params.firstName"
          :disabled="isDisabled"
        />
      </li>
      <li>
        Last Name:
        <input
          class="edit_employee"
          v-model="$route.params.lastName"
          :disabled="isDisabled"
        />
      </li>
      <li>
        Date of employment:
        <input
          class="edit_employee"
          v-model="$route.params.employmentDate"
          :disabled="isDisabled"
        />
      </li>
      <li>
        Email:
        <input class="edit_employee" v-model="$route.params.email" :disabled="isDisabled" />
      </li>
      <li>
        Mobile phone:
        <input
          class="edit_employee"
          v-model="$route.params.mobile"
          :disabled="isDisabled"
        />
      </li>
      <li>
        Salary netto:
        <input
          class="edit_employee"
          v-model="$route.params.salaryNetto"
          :disabled="isDisabled"
        /> $
      </li>
      <li>
        Salary brutto:
        <input
          class="edit_employee"
          v-model="$route.params.salaryBrutto"
          :disabled="$route.params.salaryBrutto"
        /> $
      </li>
      <li>
        Department:
        <input
          class="edit_employee"
          v-model="$route.params.department"
          :disabled="isDisabled"
        />
      </li>
      <li>
        Position:
        <input
          class="edit_employee"
          v-model="$route.params.position"
          :disabled="isDisabled"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //   props: ["user"],
  data() {
    return {
      id: this.$route.params.id,
      isDisabled: true
    };
  },
  updated() {
    console.log("Component Employee is updated!", this.$route.params);
  },
  methods: {
    saveEditedData() {
      console.log(this.$route.params.id);
      // 1. find a current user by id
      // 2. check if a changed info doesn`t match an existing data at server side
      // 3. use PUT method to update info at server side
    }
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