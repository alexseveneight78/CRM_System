<template>
  <div class="company_structure">
    <app-button></app-button>
    <div class="container">
      <app-list></app-list>
      <app-structure></app-structure>
    </div>
  </div>
</template>

<script>
import List from "./employees/EmployeesList";
import AddButton from "./employees/AddNewEmployee";
import Structure from "./employees/Structure";

export default {
  components: {
    appList: List,
    appButton: AddButton,
    appStructure: Structure
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