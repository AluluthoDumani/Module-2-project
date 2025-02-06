import {getEmployees,getSingleEmployee, insertEmployee,deleteEmployee, updateEmployee} from '../model/employeeModel.js'
const getEmployeesCon = async(req,res)=>{
    res.json({employee: await getEmployees()})
}

export {getEmployeesCon, insertEmployeeCon, getSingleEmployeeCon,deleteEmployeeCon, updateEmployeeCon}

const getSingleEmployeeCon = async(req,res)=>{
    res.json({employee: await getSingleEmployee(req.params.employee_id)})
}


const insertEmployeeCon = async (req,res)=>{
    let {employee_id,name,position,department_id} = req.body
  res.json({employee: await insertEmployee(employee_id,name,position,department_id)
    
  })

}

const deleteEmployeeCon = async (req,res) => {
    res.json({employee: await deleteEmployee(req.params.employee_id)})
    
}

// This only updates name,position and department id 
const updateEmployeeCon = async(req,res)=>{
    let {employee_id,name,position,department_id,employment_history,contact} = req.body
    res.json({employee :await updateEmployee(employee_id,name,position,department_id,employment_history,contact)})
}