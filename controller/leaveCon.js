import {getLeaves,getSingleLeave, insertLeave,deleteLeave, updateLeave} from '../model/leaveModel.js'


const getLeavesCon = async(req,res)=>{
    res.json({Leaves: await getLeaves()})
}

export {getLeavesCon, insertLeaveCon, getSingleLeaveCon,deleteLeaveCon, updateLeaveCon}

const getSingleLeaveCon = async(req,res)=>{
    res.json({emp: await getSingleLeave(req.params.leave_id)})
}


const insertLeaveCon = async (req,res)=>{
    let {leave_id,employee_id,leave_date,reason,status} = req.body
  res.json({Leaves: await insertLeave(leave_id,employee_id,leave_date,reason,status)
    
  })

}

const deleteLeaveCon = async (req,res) => {
    res.json({Leavedel: await deleteLeave(req.params.leave_id)})
    
}

// This only updates name,position and department id 
const updateLeaveCon = async(req,res)=>{
    let {leave_id,employee_id,leave_date,reason,status} = req.body
    res.json({Leave :await updateLeave(leave_id,employee_id,leave_date,reason,status)})
}