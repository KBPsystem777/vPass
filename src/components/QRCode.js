import QRCode from "react-qr-code"
import { userId } from "../state/stateManager"
import { useAtom } from "jotai"

const qrConfig = {
  level: "L",
  size: 128,
  bgColor: "#fffaf0",
  fgColor: "#212F3D",
}

function MyQRcode() {
  const [code] = useAtom(userId)

  return (
    <div className="text-center">
      <QRCode
        className="img-fluid"
        value={code}
        level={qrConfig.level}
        bgColor={qrConfig.bgColor}
        fgColor={qrConfig.fgColor}
      />
    </div>
  )
}

export default MyQRcode
