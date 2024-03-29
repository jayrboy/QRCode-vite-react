import { useState, useEffect } from 'react'

// Icons
import { BiTrash, BiEdit } from 'react-icons/bi'
import { AiFillPicture } from 'react-icons/ai'

import QRCode from 'react-qr-code'

const Item = (props) => {
  const { data, deleteTask, editTask, number } = props
  const [url, setUrl] = useState('')
  const [isQrOpen, setQrOpen] = useState(false)
  let [clicked, setClicked] = useState(data.clicked)

  const defaultProxy = 'https://localhost:5173'

  useEffect(() => {}, [clicked])

  const onOpenQr = (url) => {
    setUrl(url)
    setQrOpen(true)
  }

  const onCloseQr = () => {
    setQrOpen(false)
  }

  return (
    <>
      <div
        className="card container mt-3 p-3 mx-auto"
        style={{ width: '500px' }}
      >
        <div className="row justify-content-between align-items-center">
          <div className="col-1">
            <h3>
              <strong>{number + 1}</strong>
            </h3>
          </div>
          <div className="col-8 text-center">
            <p>
              {data.full_url}
              <br />
              <button
                className="btn btn-sm btn-outline-info"
                onClick={() => setClicked((data.clicked += 1))}
              >
                {defaultProxy}/{data.short_url}
              </button>
              <br />
              clicked: {data.clicked}
            </p>
          </div>
          <div className="col-3">
            <AiFillPicture
              className="icon"
              size={25}
              color="blue"
              onClick={() => onOpenQr(`${defaultProxy}/${data.short_url}`)}
            />
            <BiEdit
              className="icon"
              size={25}
              color="orange"
              onClick={() => editTask(data.id)}
            />
            <BiTrash
              className="icon"
              size={25}
              color="red"
              onClick={() => deleteTask(data.id)}
            />
          </div>
        </div>
      </div>
      {isQrOpen && (
        <div className="qr-modal">
          <QRCode value={url} size={256} />
          <button className="btn btn-sm btn-danger mt-2" onClick={onCloseQr}>
            Close
          </button>
        </div>
      )}
    </>
  )
}
export default Item
