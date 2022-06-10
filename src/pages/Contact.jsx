import React, { useEffect, useState } from 'react'

const Contact = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [tel, setTel] = useState(0)
    const [email, setEmail] = useState('')

    const [data, setData] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {name, surname, tel, email}
        const tempda = JSON.stringify(formData)
        setData(JSON.stringify(formData))
        setName('')
        setSurname('')
        setTel('')
        setEmail('')

        console.log(data)
    }

    return (
        <div>
            <form className='' onSubmit={(e)=>handleSubmit(e)}>
                <div className=''>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className=''>
                    <label htmlFor='name'>Surname</label>
                    <input
                        type='text'
                        value={surname}
                        onChange={(e)=>setSurname(e.target.value)}
                    />
                </div>
                <div className=''>
                    <label htmlFor='name'>Phone number</label>
                    <input 
                        type='tel'
                        value={tel}
                        onChange={(e)=>setTel(e.target.value)}
                    
                    />
                </div>
                <div className=''>
                    <label htmlFor='name'>Email</label>
                    <input 
                        type='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>

            {data? <p>{data}</p> : null}
        </div>
    )
}

export default Contact