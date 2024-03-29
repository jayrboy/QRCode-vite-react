import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import shortid from 'shortid'

import Header from './components/Header'
import AddUrl from './components/AddUrl'
import Item from './components/Item'

function App() {
  const [theme, setTheme] = useState('light')
  const [listUrl, setListUrl] = useState(
    JSON.parse(localStorage.getItem('listURL')) || []
  )
  const [fullUrl, setFullUrl] = useState('')
  const [editId, setEditId] = useState(null)

  // useEffect รูปแบบ 3 การตอบสนองตามตัวแปร state [listUrl] เมื่อค่าเปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem('listURL', JSON.stringify(listUrl))
  }, [listUrl])

  function deleteTask(id) {
    const result = listUrl.filter((item) => item.id !== id)
    setListUrl(result)
  }

  function saveURL(e) {
    e.preventDefault()
    if (!fullUrl) {
      alert('กรุณาป้อนข้อมูล')
    } else if (editId) {
      //TODO: อัพเดทข้อมูล
      const updateTask = listUrl.map((item) => {
        // รายการใดมีรหัสตรงกับรหัสแก้ไข
        if (item.id === editId) {
          return {
            ...item,
            full_url: fullUrl,
            short_url: shortid.generate(),
            clicked: 0,
          }
        }
        return item
      })
      setListUrl(updateTask)
      setEditId(null)
      setFullUrl('')
    } else {
      //TODO: เพิ่มรายการใหม่
      const newTask = {
        id: nanoid(),
        full_url: fullUrl,
        short_url: shortid.generate(),
        clicked: 0,
      }
      setListUrl([...listUrl, newTask])
      setFullUrl('')
    }
  }

  function editTask(id) {
    setEditId(id)
    const editTask = listUrl.find((item) => item.id === id)
    setFullUrl(editTask.full_url)
  }

  function updateClicked(id) {
    // หา URL ที่มี id ตรงกับ id ที่ระบุ
    const updatedUrl = listUrl.map((item) => {
      if (item.id === id) {
        // เพิ่มค่า clicked ของ URL นี้ขึ้นไปอีก 1
        return { ...item, clicked: item.clicked + 1 }
      }
      return item
    })

    // อัพเดท listUrl ด้วย URL ที่ได้มาจากการแก้ไข
    setListUrl(updatedUrl)

    // ค้นหา URL ที่มี id ตรงกับ id ที่ระบุ
    const matchedUrl = listUrl.find((item) => item.id === id)

    // ทำการ redirect ไปยัง full_url ของ URL ที่ตรงกับ id ที่ระบุ
    if (matchedUrl) {
      window.open(matchedUrl.full_url, '_blank')
    }
  }

  return (
    <div className={'App ' + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container mt-5">
        <AddUrl
          fullUrl={fullUrl}
          setFullUrl={setFullUrl}
          saveURL={saveURL}
          editId={editId}
        />
        <section>
          {listUrl.map((data, number) => (
            <Item
              key={data.id}
              number={number}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
              updateClicked={updateClicked}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default App
