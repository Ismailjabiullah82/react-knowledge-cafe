
import { useState } from 'react'
import './App.css'
import Bolgs from './Components/Blogs/Bolgs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto flex gap-2'>
        <Bolgs 
        handleAddToBookmark = {handleAddToBookmark}
        handleMarkAsRead = {handleMarkAsRead}></Bolgs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime = {readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
