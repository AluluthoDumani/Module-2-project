import {getUsers,getSingleUser, insertUsers,deleteUsers, updateUsers} from '../model/usersModel.js'
const getUsersCon = async(req,res)=>{
    res.json({users: await getUsers()})
}

export {getUsersCon, insertUsersCon, getSingleUserCon,deleteUsersCon, updateUsersCon}

const getSingleUserCon = async(req,res)=>{

    res.json({users: await getSingleUser(req.params.contact)})
}


const insertUsersCon = async (req,res)=>{
    let {contact,role,password} = req.body
  res.json({users: await insertUsers(contact,role,password)
    
  })

}

const deleteUsersCon = async (req,res) => {
    res.json({users: await deleteUsers(req.params.contact)})
    
}

// This only updates name,position and department id 
const updateUsersCon = async(req,res)=>{
    let {contact,role,password} = req.body
    res.json({users :await updateUsers(contact,role,password)})
}