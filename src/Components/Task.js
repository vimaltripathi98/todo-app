import React, { useState } from 'react';

const Task = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
};

export default Task;
