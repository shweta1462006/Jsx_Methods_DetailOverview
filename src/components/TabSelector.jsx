import React, { useState } from 'react'
import Form from './Form'
import Table from './Table';

function TabSelector() {
    const [userList, setList] = useState([]);
    const [selectedTab, setSelectedTab] = useState('form');

    return (
        <>
            <ul className="container m-4 p-3 nav nav-tabs">
                <li className="nav-item">
                    <button className={`nav-link ${selectedTab === 'form' && 'active'} `} aria-current="page"  onClick={()=>setSelectedTab('form')}  >User Form</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${selectedTab === 'table' && 'active'} `}  onClick={()=>setSelectedTab('table')} >User Table</button>
                </li>

            </ul>

            {selectedTab === 'form' && <Form setList={setList} />}
            {selectedTab === 'table' && <Table userList={userList} />}

        </>
    )
}

export default TabSelector
