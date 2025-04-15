export default function createReportObject(employeesList) {
  const ReportObj = {
    allEmployees: employeesList,
    getNumberOfDepartments: (allemps) => Object.keys(allemps).length,
  };
  return ReportObj;
}
