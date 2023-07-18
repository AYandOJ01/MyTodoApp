const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// MySQL Database Connection Configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo'
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig).promise();

// Middleware to parse JSON requests
app.use(express.json());

// API Endpoints

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ error: 'An error occurred while retrieving tasks.' });
  }
});

// Create a new task
app.post('/api/tasks', async (req, res) => {
  const { name, activity, state, dateline } = req.body;

  try {
    await pool.query('INSERT INTO tasks (name, activity, state, dateline, completed) VALUES (?, ?, ?, ?, ?)', [name, activity, state, dateline, false]);
    res.sendStatus(201);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'An error occurred while creating a task.' });
  }
});

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const { completed } = req.body;

  try {
    await pool.query('UPDATE tasks SET completed = ? WHERE id = ?', [completed, taskId]);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'An error occurred while updating the task.' });
  }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    await pool.query('DELETE FROM tasks WHERE id = ?', [taskId]);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'An error occurred while deleting the task.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
