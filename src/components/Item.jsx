import { useState, useEffect } from 'react'

// Icons
import { BiTrash, BiEdit } from 'react-icons/bi'
import { AiFillPicture } from 'react-icons/ai'

import QRCode from 'react-qr-code'

const Item = (props) => {
  const { number, data, deleteTask, editTask, updateClicked } = props
  const [url, setUrl] = useState('')
  const [isQrOpen, setQrOpen] = useState(false)

  const defaultProxy = 'https://localhost:5173'

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
                onClick={() => updateClicked(data.id)}
              >
                {defaultProxy}/{data.short_url}
              </button>
              <br />
              clicked: {data.clicked}
            </p>
          </div>
          <div className="col-3 d-flex flex-column justify-content-center align-items-center">
            <AiFillPicture
              className="icon mb-3"
              size={40}
              color="blue"
              // onClick={() => onOpenQr(`${defaultProxy}/${data.short_url}`)}
              onClick={() => onOpenQr(data.full_url)}
            />
            <BiEdit
              className="icon mb-3"
              size={40}
              color="orange"
              onClick={() => editTask(data.id)}
            />
            <BiTrash
              className="icon mb-auto"
              size={40}
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
