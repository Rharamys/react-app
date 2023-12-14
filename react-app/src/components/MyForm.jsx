import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleBio = (e) => {
        setBio(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending form")
        console.log(name, email, bio, role)

        // clear form
        setName('')
        setEmail('')
        setBio('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Provide your name" 
                        onChange={handleName}
                        value={name}
                    />
                </div>

                {/* Label encapsulating input */}
                <label>
                    <span>E-mail:</span>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Provide your email"  
                        onChange={handleEmail}
                        value={email}
                    />
                </label>

                {/* Text Area */}
                <label>
                    <span>Biography:</span>
                    <textarea 
                        name="bio" 
                        placeholder="Provide a description"  
                        onChange={handleBio}
                        value={bio}
                    />
                </label>

                {/* Select / dropdown */}
                <label>
                    <span>System role:</span>
                    <select name="role" onChange={(e)=> {setRole(e.target.value)}} value={role}>
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>

                <input type="submit" value="Request" />
            </form>
        </div>
    )
}

export default MyForm