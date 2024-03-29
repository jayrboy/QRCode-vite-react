const AddUrl = (props) => {
  const { fullUrl, setFullUrl, saveURL, editId } = props

  return (
    <div className="text-center">
      <h2>ย่อลิงค์ ฟรี !</h2>
      <p>รวดเร็ว ปลอดภัย ด้วย Local Storage</p>
      <form className="d-flex" onSubmit={saveURL}>
        <input
          type="url"
          className="form-control me-2"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          {editId ? 'อัพเดท' : 'เพิ่ม'}
        </button>
      </form>
    </div>
  )
}
export default AddUrl
