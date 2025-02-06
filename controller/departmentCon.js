import {getDepartments,getSingleDepartment, insertDepartment,deleteDepartment, updateDepartment} from '../model/departmentModel.js'


const getDepartmentsCon = async(req,res)=>{
    res.json({department: await getDepartments()})
}

export {getDepartmentsCon, insertDepartmentCon, getSingleDepartmentCon,deleteDepartmentCon, updateDepartmentCon}

const getSingleDepartmentCon = async(req,res)=>{
    res.json({department: await getSingleDepartment(req.params.department_id)})
}


const insertDepartmentCon = async (req,res)=>{
    let {department_id,department_names} = req.body
  res.json({department: await insertDepartment(department_id,department_name)
    
  })

}

const deleteDepartmentCon = async (req,res) => {
    res.json({department: await deleteDepartment(req.params.department_id)})
    
}

// This only updates name,position and department id 
const updateDepartmentCon = async(req,res)=>{
    let {Department_id,department_name} = req.body
    res.json({department :await updateDepartment(Department_id,department_name)})
}