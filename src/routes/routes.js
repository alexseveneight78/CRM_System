import Home from "../components/Home";
import Carriers from "../components/Carriers/Carriers";
import CompanyStructure from "../components/Company structure/CompanyStructure";

import Departments from '../components/Company structure/employees/Departments';
import Employee from '../components/Company structure/employees/Employee';

import Customers from "../components/Customers/Customers";
import Orders from "../components/Orders/Orders";
import Requests from "../components/Requests/Requests";
import SalaryMotivation from "../components/Salary+Motivation/Salary+Motivation";

export const routes = [
  { path: "/", component: Home },
  { path: "/carriers", component: Carriers },
  { path: "/company-structure", component: CompanyStructure, children: [
    { path: "departments", component: Departments },
    { path: "employees/:id", component: Employee }
  ] 
  },
  { path: "/customers", component: Customers },
  { path: "/orders", component: Orders },
  { path: "/requests", component: Requests },
  { path: "/salary-motivation", component: SalaryMotivation }
];
