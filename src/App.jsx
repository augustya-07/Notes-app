import React, { useState } from 'react'

const App = () => {

  const [formtitle, setFormtitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, settask] = useState([])

  const message = (e)=>{
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({formtitle,detail})
    settask(copyTask)
    setFormtitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    settask(copyTask)
  }

  return (
    <div className='bg-black h-screen text-white lg:flex'>
      <form onSubmit={message} className='p-10 flex flex-col gap-4 lg:w-1/2 items-start '>
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          <input
            className='px-5 py-2 w-full border-2 font-medium rounded outline-none'
            type="text" 
            name="name" id="" 
            placeholder='Title of Note' 
            onChange={(e)=>{setFormtitle(e.target.value)}}
            value={formtitle}
          />
          <textarea
            className='px-5 py-2 h-35 w-full font-medium border-2 rounded outline-none'
            type="text" 
            name="details" id="" 
            placeholder='Write Details'
            onChange={(e)=>{setDetail(e.target.value)}}
            value={detail}
            
          />
          <button className='bg-white text-black border-2 px-5 py-2 rounded w-full active:scale-95 font-medium outline-none'>Add Note</button>
        
        
      </form>
      <div className='p-10   lg:w-1/2 lg:border-l-2 bg-gray-800 '>
        <h1 className='text-3xl font-bold'>You Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          {task.map((elem,idx)=>{
            return <div key={idx} className='h-52 w-40 rounded-2xl text-black p-4 bg-white flex flex-col justify-between items-start relative'>
              <div>
                <h3 className='font-bold leading-tight text-lg'>{elem.formtitle}</h3>
                <p className='mt-2 leading-tight font-medium text-sm text-gray-600'>{elem.detail}</p>
              </div>
              <button onClick={()=>{deleteNote(idx)}} className='bg-red-500 w-full rounded font-bold text-xs py-1  cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}
        </div      >
      </div>
    </div>
  )
}

export default App