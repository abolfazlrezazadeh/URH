import { createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"
import { cloneElement } from "react"
import useOutsideClick from "../hooks/useOutsideClick"

const StyledModal = ({ children }) => (
  <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-gray-100 p-8 shadow-lg transition duration-500">
    {children}
  </div>
)

const Overlay = ({ children }) => (
  <div className="fixed left-0 top-0 z-50 h-full w-full bg-black bg-opacity-50 backdrop-blur transition duration-500">
    {children}
  </div>
)

const Button = ({ children, onClick }) => (
  <button
    className="absolute right-8 top-4 translate-x-2 transform rounded-sm border-none bg-transparent p-1 transition duration-200"
    onClick={onClick}
  >
    {children}
  </button>
)

const ModalContext = createContext()

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("")

  const close = () => setOpenName("")
  const open = setOpenName

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext)

  return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext)
  const ref = useOutsideClick(close)

  if (name !== openName) return null

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>❌</Button>
        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </StyledModal>
    </Overlay>,
    document.body,
  )
}

Modal.Open = Open
Modal.Window = Window
