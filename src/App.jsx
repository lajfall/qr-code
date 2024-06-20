import qrCode from './assets/image-qr-code.png'

function App() {
  return (
    <div className="card">
      <img className="qr-code" src={qrCode} alt="QR Code" />
      <div className="card-info">
        <h1 className="card-title">
          Improve your front-end skills by building projects
        </h1>
        <p className="card-description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}

export default App
