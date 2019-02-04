import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import personManager from './services/personManager'
import './index.css'

const Notification = ({ message, className }) => {
    
    if (message === "") {
        return null
    }
    return (
        <div className={className}>
            {message}
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'test', number: '1200' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    useEffect(() => {
        console.log('effect')
        personManager
            .getAll()
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }, [])
    console.log('render', persons.length, 'notes')

    const addPerson = (event) => {
        event.preventDefault()
        const thing = {
            name: newName,
            number: newNumber
        }
        if (persons.map(c => c.name).includes(newName)) {
            if (window.alert(`${newName} on jo luettelossa.`)) {
                //    personManager.update(persons.filter(c => c.name = newName)[0].id, thing)
                //    .then(response => {
                //        console.log(response)
                //!!
                //        window.location.reload();
                //    })
            }
        } else {
            setPersons(persons.concat(thing))
            setNewName('')
            setNewNumber('')
            personManager
                .create(thing)
                .then(response => {
                    console.log(response)
                    setPersons(persons.concat(response.data))
                    setMessage(
                        `Lisättiin ${thing.name}`
                    )
                    setTimeout(() => {
                        setMessage("")
                    }, 5000)
                })
        }
    }

    const removePerson = (c) => {
        if (window.confirm(`Poistetaanko ${c.name}?`)) {
            personManager.del(c.id)
                .then(response => {
                    setMessage(
                        `Poistettiin ${c.name}.`
                    )
                    setTimeout(() => {
                        setMessage("")
                    }, 5000)
                    console.log(response)
                    personManager.getAll().then(response => {
                        setPersons(response.data)
                    })
                    //window.location.reload();
                })
                .catch(error => {
                    setErrorMessage(
                        `Henkilö ${c.name} oli jo poistettu...`
                    )
                    setTimeout(() => {
                        setErrorMessage("")
                    }, 5000)
                  })
                  

        }

    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const personList = () => persons
        .filter(c => c.name.includes(newFilter))
        .map(c =>
            <div key={c.name}>
                {c.name} {c.number} <button onClick={() => removePerson(c)}>
                    poista
                    </button>
            </div>)

    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Notification message={message} className = "msg"/>
            <Notification message={errorMessage} className = "emsg"/>
            <form>
                rajaa näytettäviä<input value={newFilter}
                    onChange={handleFilterChange}></input>
            </form><br></br>
            <h3>lisää uusi</h3>
            <form onSubmit={addPerson}>
                <div>
                    nimi: <input value={newName}
                        onChange={handleNameChange} />
                </div>
                <div>numero: <input value={newNumber}
                    onChange={handleNumberChange} /></div>
                <div>
                    <button type="submit">
                        lisää
                    </button>
                </div>
            </form>
            <h2>Numerot</h2>
            {personList()}
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
export default App