import Nfc from "nfc-react-web"

export default function NfcReader() {
  return (
    <Nfc
      read={(data) => {
        console.log(`Data read from tag: ${JSON.stringify(data)}`)
      }}
      timeout={15} // time to keep trying to read tags, in seconds
    />
  )
}
