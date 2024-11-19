import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
    return (
        <ul>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
