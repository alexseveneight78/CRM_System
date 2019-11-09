<template>
  <div class="add_new">
    <button @click="show = true">Add a new employee</button>
    <div class="modal" v-if="show">
      <div class="modal-content">
        <span class="close" @click="show = false">&times;</span>
        <div class="new_employee_data">
          <div class="data-block">
            First Name:
            <label for="new_employee_first_name"></label>
            <input type="text" id="new_employee_first_name" v-model="newEmployeeFirstName" />
          </div>
          <div class="data-block">
            Last Name:
            <label for="new_employee_last_name"></label>
            <input type="text" id="new_employee_last_name" v-model="newEmployeeLastName" />
          </div>
          <div class="data-block">
            <label for="employment_date">Date of employment</label>
            <input type="date" id="employment_date" v-model="newEmployeeEmploymentDate" />
          </div>
          <div class="data-block">
            <label for="new_employee_email">Email</label>
            <input type="email" id="new_employee_email" v-model="newEmployeeEmail" />
          </div>
          <div class="data-block">
            <label for="new_employee_mobile">Mobile phone</label>
            <input type="tel" id="new_employee_mobile" v-model="newEmployeeMobile" />
          </div>
          <div class="data-block">
            <label for="new_employee_salary_netto">Salary netto,$</label>
            <input type="number" id="new_employee_salary_netto" v-model="newEmployeeSalaryNetto" />
          </div>
          <div class="data-block">
            <label for="new_employee_salary_brutto">Salary brutto,$</label>
            <input type="number" id="new_employee_salary_brutto" v-model="newEmployeeSalaryBrutto" />
          </div>
          <div class="data-block">
            <label for="new_employee_department">Department</label>
            <select id="new_employee_department" v-model="newEmployeeDepartment">
              <option value="sales">Sales</option>
              <option value="hr">HR</option>
              <option value="accounting">Accounting</option>
              <option value="it">IT</option>
              <option value="top-management">Top-management</option>
            </select>
          </div>
          <div class="data-block">
            <label for="new_employee_postion">Position</label>
            <input type="text" id="new_employee_position" v-model="newEmployeePosition" />
          </div>
          <div class="data-block"></div>
        </div>
        <input type="submit" value="Create a new employee" @click="createEmployee" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      newEmployeeFirstName: "",
      newEmployeeLastName: "",
      newEmployeeEmploymentDate: "",
      newEmployeeEmail: "",
      newEmployeeMobile: "",
      newEmployeeSalaryNetto: "",
      newEmployeeSalaryBrutto: "",
      newEmployeeDepartment: "",
      newEmployeePosition: ""
    };
  },
  methods: {
    checkIfFilled() {
      if (
        this.newEmployeeFirstName === "" ||
        this.newEmployeeLastName === "" ||
        this.newEmployeeEmploymentDate === "" ||
        this.newEmployeeEmail === "" ||
        this.newEmployeeMobile === "" ||
        this.newEmployeeSalaryNetto === "" ||
        this.newEmployeeSalaryBrutto === "" ||
        this.newEmployeeDepartment === "" ||
        this.newEmployeePosition === ""
      ) {
        alert("Not all fields are filled!");
        return false;
      }
    },
    createEmployee() {
      this.checkIfFilled();
      // add a new employee to database
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.add_new {
  //margin-top: 15px;

  button {
    margin-top: 20px;
  }

  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 90%;
    margin-top: 3%;
    overflow: auto;
    background-color: rgba(138, 142, 150, 0.9);

    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;

      .close {
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        position: relative;
        left: 50%;
        top: -20px;
        &:hover,
        &:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      }
      .new_employee_data {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .data-block {
          border: 1px solid gray;
          margin: 10px 15px;
          padding: 8px 13px;
          border-radius: 10px;
          transition: 300ms;
          &:hover {
            box-shadow: 3px 3px 10px #ccc;
          }
        }
      }
    }
  }
}
</style>