import React, { useState } from 'react';
import classes from "../../Styles/Task.module.css";


const Task = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <li className={`${classes.task} ${task.completed ? classes.completed : ''} ${isEditing ? classes.editing : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className={classes.checkbox}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className={classes.editInput}
                />
            ) : (
                <span className={classes.taskText}>{task.text}</span>
            )}
            <button onClick={() => deleteTask(task.id)} className={`${classes.button} ${classes.delete}`}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)} className={classes.button}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
};

export default Task;
