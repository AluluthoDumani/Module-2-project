import express from 'express'
import employeesRoutes from './routes/employeeRoutes.js'
import payrollRoutes from './routes/payrollRoutes.js'
import attendeRoutes from './routes/attendeRoutes.js'
import leaveRoutes from './routes/leaveRoutes.js'
import departmentRoutes from './routes/departmentRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import cors from 'cors'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT


const app =express()
app.use(cors())

app.use(express.json())
// path + imported file
app.use('/employees', employeesRoutes)
app.use('/payroll',payrollRoutes)
app.use('/attendee',attendeRoutes)
app.use('/leave', leaveRoutes)
app.use('/department', departmentRoutes)
app.use('/users', usersRoutes)



app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT);
    
})
 