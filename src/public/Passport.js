import MyQRcode from "../components/QRCode"
import * as htmlToImage from "html-to-image"
import download from "downloadjs"
import shortid from "shortid"

function downloadMyQR() {
  const fileName = shortid.generate()
  const canvas = document.getElementById("qr-container")
  htmlToImage.toPng(canvas).then(function (dataUrl) {
    download(dataUrl, `VPass-${fileName}-${new Date().getMilliseconds()}.png`)
  })
}

const MyPassport = () => {
  return (
    <div className="text-center passport-top-padding">
      <div className="qr-container" id="qr-container">
        <h2 className="top-padding">My Vaccination Passport</h2>
        <MyQRcode />
        <p className="top-padding">
          I-scan ang QR para makita ang detalye ng pagbakuna
        </p>
      </div>
      <div>
        <button className="btn btn-primary" onClick={downloadMyQR}>
          I-Download ang VPass QR
        </button>
      </div>
    </div>
  )
}

export default MyPassport
