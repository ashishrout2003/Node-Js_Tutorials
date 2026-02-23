import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
const navigate = useNavigate()
const handlesubmit = async(e)=>{
    e.preventDefault()

    const formdata = new FormData(e.target)

    axios.post('http://localhost:3000/create-post', formdata)

    .then((res)=>{
        console.log(res);
        navigate('/feed')  
    })
    .catch((err)=>{
        console.log(err);
    })
}

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={handlesubmit}>
            <input type='file' name='image' accept='image/*'/>
            <input type='text' name='caption' placeholder='Enter caption' required />
            <button type='submit'>Create Post</button>

        </form>
    </section>
  )
}

export default CreatePost