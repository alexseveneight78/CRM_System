<template>
  <div class="structure">
    <div class="department">
      <h4>Top management</h4>
      <ul>
        <li v-for="worker in topManagement">
          <a href="">{{ worker }}</a>
        </li>
      </ul>
    </div>
    <div class="department">
      <h4>Sales</h4>
      <ul>
        <li v-for="worker in sales">
          <a href="">{{ worker }}</a>
        </li>
      </ul>
    </div>
    <div class="department">
      <h4>HR</h4>
      <ul>
        <li v-for="worker in HR">
          <a href="">{{ worker }}</a>
        </li>
      </ul>
    </div>
    <div class="department">
      <h4>IT</h4>
      <ul>
        <li v-for="worker in IT">
          <a href="">{{ worker }}</a>
        </li>      
      </ul>
    </div>
    <div class="department">
      <h4>Accounting</h4>
      <ul>
        <li v-for="worker in accounting">
          <a href="">{{ worker }}</a>
        </li>       
      </ul>
    </div>
  </div>
</template>

<script>


  export default {
    data(){
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
          position: "Sales manager"
        },
        {
          id: 2,
          firstName: "Boris",
          lastName: "Brok",
          employmentDate: "5.05.2015",
          email: "boris@gmail.com",
          mobile: "+3752985648974",
          salaryNetto: "500",
          salaryBrutto: "620",
          department: "IT",
          position: "IT manager"
        },
        {
          id: 3,
          firstName: "Chris",
          lastName: "Lart",
          employmentDate: "23.12.2017",
          email: "chris@gmail.com",
          mobile: "+375294561122",
          salaryNetto: "700",
          salaryBrutto: "820",
          department: "HR",
          position: "HR manager"
        },
        {
          id: 4,
          firstName: "Daniel",
          lastName: "Weltz",
          employmentDate: "11.09.2018",
          email: "daniel@gmail.com",
          mobile: "+375298977452",
          salaryNetto: "1800",
          salaryBrutto: "2120",
          department: "Top management",
          position: "TOP-manager"
        },
        {
          id: 5,
          firstName: "Lesley",
          lastName: "Grace",
          employmentDate: "19.10.2019",
          email: "lesley@gmail.com",
          mobile: "+375297845263",
          salaryNetto: "500",
          salaryBrutto: "620",
          department: "Accounting",
          position: "Accounting manager"
        },
        {
          id: 6,
          firstName: "Greal",
          lastName: "Grace",
          employmentDate: "15.03.2019",
          email: "greal@gmail.com",
          mobile: "+375297845264",
          salaryNetto: "500",
          salaryBrutto: "620",
          department: "Accounting",
          position: "Accounting manager"
        }          
        ]
      }
    },
    computed: {
      topManagement(){
        return this.employees.map(item => {
          return item.department === 'Top management' ? `${item.firstName + ' ' + item.lastName}` : '';
        })
      },
      sales(){
        return this.employees.map(item => {
          return item.department === 'Sales' ? `${item.firstName + ' ' + item.lastName}` : '';
        })      
      },
      HR(){
        return this.employees.map(item => {
          return item.department === 'HR' ? `${item.firstName + ' ' + item.lastName}` : '';
        })         
      },
      IT(){
        return this.employees.map(item => {
          return item.department === 'IT' ? `${item.firstName + ' ' + item.lastName}` : '';
        })      
      },
      accounting(){
        return this.employees.map(item => {
          return item.department === 'Accounting' ? `${item.firstName + ' ' + item.lastName}` : '';
        })        
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