import React from 'react';
import classes from "../../Styles/Filter.module.css"


const Filter = ({ setFilter }) => {
    return (
        <div className={classes.filterContainer}>
            <button className={classes.filterButton} onClick={() => setFilter('All')}>All</button>
            <button className={classes.filterButton} onClick={() => setFilter('Completed')}>Completed</button>
            <button className={classes.filterButton} onClick={() => setFilter('Pending')}>Pending</button>
        </div>
    );
};

export default Filter;
