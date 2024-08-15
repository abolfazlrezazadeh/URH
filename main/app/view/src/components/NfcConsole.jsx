const NfcConsole = ({ feed }) => {
  return (
    <div className="h-96 w-screen rounded-t-2xl bg-primary p-5 text-[#f7f7f5] opacity-95 overflow-y-scroll">
      <span className="text-xs text-black">SERIAL NUMBER</span>
      <div className="mt-2">
        {feed.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  )
}

export default NfcConsole
