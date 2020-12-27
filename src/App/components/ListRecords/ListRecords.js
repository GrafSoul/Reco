// Core
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// Styles
import './ListRecords.scss';

const ListRecords = ({ list, deleteEntry, isResult, count, handlerResult }) => {
    return (
        <div className={['result', isResult ? 'active' : null].join(' ')}>
            <h2>List of media records ({count})</h2>
            <Scrollbars style={{ height: '410px', overflow: 'hidden' }}>
                <ul className="list-media">
                    {list.map((item, index) => {
                        return (
                            <li className="list-item" key={index}>
                                {item}
                                <button
                                    className="btn-delete"
                                    onClick={() => deleteEntry(index)}
                                >
                                    <i className="fal fa-trash-alt"></i>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </Scrollbars>

            <div className="control-record">
                <button className="btn btn-success" onClick={handlerResult}>
                    Back to Record <i className="fal fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default ListRecords;
