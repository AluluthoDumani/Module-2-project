import {getLeaves,getSingleLeave, insertLeave,deleteLeave, updateLeave} from '../model/leaveModel.js'


const getLeavesCon = async(req,res)=>{
    res.json({leave: await getLeaves()})
}

export {getLeavesCon, insertLeaveCon, getSingleLeaveCon,deleteLeaveCon, updateLeaveCon}

const getSingleLeaveCon = async(req,res)=>{
    res.json({leave: await getSingleLeave(req.params.leave_id)})
}


const insertLeaveCon = async (req,res)=>{
    let {leave_id,employee_id,leave_date,reason,status} = req.body
  res.json({leave: await insertLeave(leave_id,employee_id,leave_date,reason,status)
    
  })

}

const deleteLeaveCon = async (req,res) => {
    res.json({leave: await deleteLeave(req.params.leave_id)})
    
}

// This only updates name,position and department id 
const updateLeaveCon = async(req,res)=>{
    let {leave_id,employee_id,leave_date,reason,status} = req.body
    res.json({leave :await updateLeave(leave_id,employee_id,leave_date,reason,status)})
}