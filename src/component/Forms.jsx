import React, { useState, useReducer } from 'react';

const detialsReducer = (state, e) => {
    if(e.reset) {
        return {
            fname: " ",
            lname: " ",
            email: " ",
            gender: " ",
            address: " ",
            bio: " ",
        }
    }
    return {
        ...state,
        [e.name]: e.value
        }
    }


const Forms = () => {

   

    const [userInputData, setUserInputData] = useReducer(detialsReducer, {})
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false)
            setUserInputData({
                reset:true,
            })
        }, 5000)
    }

    const handleChange = (e) => {
        setUserInputData({
            name: e.target.name,
            value: e.target.value
        })
    }



  return (
    <div className='h-auto mt-4 flex flex-row justify-center p-2'>
        
        <section className='bg-slate-700 lg:w-1/2 h-auto p-8'>
            <div className='bg-slate-500 text-gray-100 h-auto rounded-md shadow-xl mb-4'>
            {
                submitting && 
                <div className='p-3'>
                    You are Submitting the following: 
                    <ul>
                        {Object.entries(userInputData).map(([name,value]) => (
                            <li key={name}><strong>{name}</strong>: {value.toString()} </li>
                        ))}
                    </ul>
                </div>
            }
            </div>
            <form action="" onSubmit={handleSubmit}>
                <fieldset className='grid lg:grid-cols-2 gap-2'>
                    <label htmlFor="">
                        <p className='label-text'>First Name</p>
                        <input type="text" name='fname' onChange={handleChange} value={userInputData.fname || '' } className='input-style'/>
                    </label>
                    <label htmlFor="">
                        <p className='label-text'>Last Name</p>
                        <input type="text" name='lname' onChange={handleChange} value={userInputData.lname || '' } className='input-style'/>
                    </label>
                </fieldset>
                <fieldset className='grid lg:grid-cols-2 gap-2'>
                    <label htmlFor="">
                        <p className='label-text'>Email</p>
                        <input type="email" name='email' onChange={handleChange} value={userInputData.email || '' } className='input-style' />
                    </label>
                    <label htmlFor="">
                        <p className='label-text'>Gender</p>
                        <select name="gender" className='input-style' value={userInputData.gender || ''} onChange={handleChange} id="">
                            <option value="">-- Choose your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="private">Bisexual</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset>
                    <label htmlFor="">
                        <p className='label-text'>Address</p>
                        <input type="text" name='address' value={userInputData.address || '' } onChange={handleChange} className='input-style'/>
                    </label>
                </fieldset>
                <fieldset>
                    <p className='label-text'>Bio</p>
                    <textarea name="bio" id="" cols="30" rows="10"  className='input-style' value={userInputData.bio || '' } onChange={handleChange}></textarea>
                </fieldset>
                <button type="submit" className='border-2 bg-green-600 text-lg text-white py-2 px-4 hover:bg-green-900 rounded-lg'>Submit</button>
            </form>
        </section>
    </div>
  )
}

export default Forms