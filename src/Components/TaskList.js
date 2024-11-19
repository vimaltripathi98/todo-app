import React from 'react';
import Task from "../Components/Task/Task";
import classes from "../Styles/TaskList.module.css"


const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
    return (
        <ul className={classes["task-list"]}>
            {tasks.map(task => (
                <li key={task.id} className={classes["task-item"]}>
                    <Task
                        task={task}
                        toggleTaskCompletion={toggleTaskCompletion}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
