import {getEmployees,getSingleEmployee, insertEmployee,deleteEmployee, updateEmployee} from '../model/employeeModel.js'
const getEmployeesCon = async(req,res)=>{
    res.json({employee: await getEmployees()})
}

export {getEmployeesCon, insertEmployeeCon, getSingleEmployeeCon,deleteEmployeeCon, updateEmployeeCon}

const getSingleEmployeeCon = async(req,res)=>{
    res.json({employee: await getSingleEmployee(req.params.employee_id)})
}


const insertEmployeeCon = async (req,res)=>{
    let {name,position,department_id,employment_history,contact} = req.body
  res.json({employee: await insertEmployee(name,position,department_id,employment_history,contact)
    
  })

}

const deleteEmployeeCon = async (req, res) => {
    try {
      const employee_id = parseInt(req.params.employee_id, 10);  // Convert to integer
  
      if (!employee_id) {
        return res.status(400).json({ error: 'Invalid employee ID' });
      }
  
      const result = await deleteEmployee(employee_id);  // Now this will return the query result
  
      if (result.affectedRows > 0) {
        res.json({ message: 'Employee deleted successfully' });
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      res.status(500).json({ error: 'Database error' });
    }
};

// This only updates name,position and department id 
const updateEmployeeCon = async (req, res) => {
    try {
      let { employee_id, name, position, department_id, employment_history, contact } = req.body;
  
      // Call the function to update the employee
      const updatedEmployee = await updateEmployee(employee_id, name, position, department_id, employment_history, contact);
  
      res.json({ employee: updatedEmployee });
    } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).json({ error: 'Database error' });
    }
  };