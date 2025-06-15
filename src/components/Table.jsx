import React from 'react'

function Table({userList}) {
    return (
        <>
            <div className="col-lg-7 text-center text-lg-start">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">FullName</th>
                            <th scope="col">Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((data, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.fname}</td>
                                <td>{data.email}</td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
