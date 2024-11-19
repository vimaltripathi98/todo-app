import React, { useState } from 'react';
import classes from "../../Styles/AddTask.module.css"

const AddTask = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Add a new task"
                className={classes.input}
            />
            <button type="submit" className={classes.button}>Add</button>
        </form>
    );
};

export default AddTask;
