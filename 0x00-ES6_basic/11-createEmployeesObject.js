export default function createEmployeesObject(departmentName, employees) {
  const EmployeesObj = {
    [`${departmentName}`]: employees,
  };
  return EmployeesObj;
}
