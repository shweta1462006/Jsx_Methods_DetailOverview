import React, { useState } from 'react'
import toast from 'react-hot-toast'
export default function Form({setList}) {
    const [user, setUser] = useState({
        fname: '',
        email: ''
    })



    function handleChange(e) {
        const { name, value } = e.target;

        setUser((preVal) => (
            { ...preVal, [name]: value }
        ))
    }

    function handleSubmit(e) {
        e.preventDefault();

        setList((preList) => (
            [...preList, user]
        ))
        setUser({
            fname:'',
            email:''
        })
        toast('Successfully Added!', {
            icon: '🙌',
          });

    }
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingFullName" name='fname' value={user.fname} placeholder="Full Name" onChange={handleChange} />
                            <label for="floatingFullName">Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" name='email' value={user.email} placeholder="name@example.com" onChange={handleChange} />
                            <label for="floatingInput">Email address</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                        <hr className="my-4" />
                        <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                    </form>
                </div>
              
            </div>
        </div>
    )
}
