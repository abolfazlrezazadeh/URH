const NfcConsole = ({ feed }) => {
  return (
    <div className="h-96 w-screen rounded-t-2xl bg-[#581166] p-5 text-[#f7f7f5] opacity-95">
      <span className="text-xs text-[#a24db3]">SERIAL NUMBER</span>
      <div className="mt-2">
        {feed.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  )
}

export default NfcConsole
