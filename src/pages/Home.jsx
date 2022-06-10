import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'
import Cocktail from '../component/Cocktail'
import Modal from '../component/Modal'
import Edit from '../component/Edit'

const Home = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const [cocktails, setCocktails] = useState([])
    const [searchTerm, setSearchTerm] = useState('margarita')
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [dataForEdit, setDataForEdit] = useState({})


    const fetchDrinks = useCallback(async () => {
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const { drinks } = data
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strCategory,
                        strTags,
                        strInstructions,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        category: strCategory,
                        tags: strTags,
                        instructions: strInstructions,
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
        } catch (error) {
            console.log(error)
        }
    }, [searchTerm])
    useEffect(() => {

        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    const handleAdd = () => {
        setModal(true)
    }
    const handleEdit = (data)=>{
        setEditModal(true)
        setDataForEdit(data)
    }

    const dataFromModal = (data) =>{
        const newData = {
            id: '2394',
            name: data.name,
            category: data.category,
            tags: data.tags,
            instructions: data.instructions,
        }
        setCocktails([newData, ...cocktails ])
        setModal(false)
    }

    const dataFromEdit = (data) => {
        const newData = {
            id: data.id,
            name: data.name,
            category: data.category,
            tags: data.tags,
            instructions: data.instructions,
        }
        cocktails.map((item) => item === newData.id)
    }



    return (
        <div>
            <h1>Home</h1>

            {modal ? <Modal dataFromModal={dataFromModal} /> : null}
            {editModal ? <Edit dataForEdit={dataForEdit} /> : null}

            <table>
                <tr>
                    <th>Drink Name</th>
                    <th>Category</th>
                    <th>Tags</th>
                    <th>Instructions</th>
                    <th>Actions</th>
                </tr>
                {cocktails.map((item) => {
                    // return <Cocktail key={item.id} {...item} />
                    return (<tr  key={item.id}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.category}
                            </td>
                            <td>
                                {item.tags ?  
                                
                                item.tags.split(',').map((item)=> `${item} | ` )
                                : null }
                            </td>
                            <td>
                                {item.instructions}
                            </td>
                            <td>
                                <button
                                    onClick={()=>handleAdd()}
                                >Add</button>
                                <button
                                    onClick={()=>handleEdit(item)}
                                >Edit</button>
                                <button>Delete</button>
                            </td>

                        </tr>
                   )
                })}

                {/* <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr> */}

            </table>
        </div>
    )
}

export default Home