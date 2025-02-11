import { pool } from '../config/config.js';

// Fetch all leaves
const getLeaves = async () => {
  let [data] = await pool.query('SELECT * FROM `leave`');
  return data;
};

// Fetch a single leave by its ID
const getSingleLeave = async (leave_id) => {
  let [data] = await pool.query('SELECT * FROM `leave` WHERE leave_id = ?', [leave_id]);
  return data[0]; // Return the first matching leave request
};

// Insert a new leave entry
const insertLeave = async (employee_id, leave_date, reason, status) => {
  const [result] = await pool.query(
    'INSERT INTO `leave` (employee_id, leave_date, reason, status) VALUES (?, ?, ?, ?)',
    [employee_id, leave_date, reason, status]
  );
  return { leave_id: result.insertId, employee_id, leave_date, reason, status };
};

// Delete a leave entry by its ID
const deleteLeave = async (leave_id) => {
  const [result] = await pool.query('DELETE FROM `leave` WHERE leave_id = ?', [leave_id]);
  return result.affectedRows > 0 ? { leave_id } : null; // Return deleted leave if it exists
};

// Update an existing leave entry
const updateLeave = async (leave_id, employee_id, leave_date, reason, status) => {
  const [result] = await pool.query(
    'UPDATE `leave` SET employee_id = ?, leave_date = ?, reason = ?, status = ? WHERE leave_id = ?',
    [employee_id, leave_date, reason, status, leave_id]
  );
  return result.affectedRows > 0
    ? { leave_id, employee_id, leave_date, reason, status }
    : null; // Return updated leave if it exists
};

// Approve a leave request (sets status to "Approved")
const approveLeave = async (leave_id) => {
  const [result] = await pool.query('UPDATE `leave` SET status = "Approved" WHERE leave_id = ?', [leave_id]);
  return result.affectedRows > 0 ? { leave_id, status: "Approved" } : null;
};

//  Reject a leave request (sets status to "Denied")
const rejectLeave = async (leave_id) => {
  const [result] = await pool.query('UPDATE `leave` SET status = "Denied" WHERE leave_id = ?', [leave_id]);
  return result.affectedRows > 0 ? { leave_id, status: "Denied" } : null;
};

export { getLeaves, getSingleLeave, insertLeave, deleteLeave, updateLeave, approveLeave, rejectLeave };
