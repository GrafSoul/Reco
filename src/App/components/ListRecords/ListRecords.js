// Core
import React from 'react';

// Styles
import './ListRecords.scss';

const ListRecords = ({ list, deleteEntry, isResult, count, handlerResult }) => {
    return (
        <div className={['result', isResult ? 'active' : null].join(' ')}>
            <h2>List of media records ({count})</h2>
            <ul className="list-media">
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteEntry(index)}
                            >
                                X
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button className="btn btn-success" onClick={handlerResult}>
                Back to Record <i className="fal fa-arrow-right"></i>
            </button>
        </div>
    );
};

export default ListRecords;
