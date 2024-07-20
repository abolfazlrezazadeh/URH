import { useEffect, useState } from "react"

export default function NFCReader() {
  // useEffect(() => {
  //   const ndef = new NFCReader()
  //   console.log(ndef)
  // }, [])
  // alert("string", chrome.nfc)

  // chrome.nfc.findDevices((d) => {
  //   for (var i = 0; i < d.length; i++) {
  //     console.log((d[i].vendorId, d[i].productId))
  //     document.write(d[i].vendorId, d[i].productId)
  //   }
  // })

  // if ("NDEFReader" in window) {
  //   // NFC feature is supported
  //   document.write("NFC is supported "NDEFReader" in window")
  // } else {
  //   // NFC feature is not supported
  //   document.write("NFC is not supported "NDEFReader" in window")
  // }

  // chrome.nfc.read(device, { timeout: 5 }, function (t, m) {
  //   for (var i = 0;i < m.ndef.length ; i++){
  //     var ndef = m.ndef[i]
  //     console.log("NDEF message", ndef.text || ndef.uri)
  //     document.write("NDEF message", ndef.text || ndef.uri)
  //   }
  // })

  if ("NDEFReader" in window) {
    document.write("NFC is supported - NDEFReader in window <hr />")
  } else {
    document.write("support yoxde al chah => NDEFReader in window <hr />")
  }

  if ("NFCReader" in window) {
    document.write("NFC is supported - NFCReader in window <hr />")
  } else {
    document.write("NFCReader in window da support elamir vallah <hr />")
  }

  return (
    <div>
      <h1>?????? NFC Reader</h1>
    </div>
  )
}
