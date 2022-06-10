import React, { useEffect, useState } from 'react'

const Modal = ({ dataFromModal }) => {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [tags, setTags] = useState('')
    const [instructions, setInstructions] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const openModal = false;
        const data = { name, category, tags, instructions }
        setName('')
        setCategory('')
        setTags('')
        setInstructions('')
        dataFromModal(data, openModal)
    }


    return (
        <div>
            <div>
                <h2>ADD</h2>
                <form className='' onSubmit={(e) => handleSubmit(e)}>
                    <div className=''>
                        <label htmlFor='name'>Drink Name</label>
                        <input type='text'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor='name'>Category</label>
                        <input
                            type='text'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor='name'>Tags</label>
                        <input
                            type='text'
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}

                        />
                    </div>
                    <div className=''>
                        <label htmlFor='name'>Instructions</label>
                        <input
                            required
                            type='text'
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                        />
                    </div>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal