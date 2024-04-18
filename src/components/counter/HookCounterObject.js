import React, {useState} from 'react'

// useState hook does not autonatically merge and update the object. This is the key difference between useState and setState of class components.
// setState of class components merges the object where as useState hook does not merge the object.
// So, we have to manually merge the object on useState.
function HookCounterObject() {

    // A state variable can be a string, number, boolean, object, array
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
        <form>
            <input 
                type='text' 
                value={name.firstName} 
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input 
                type='text' 
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounterObject