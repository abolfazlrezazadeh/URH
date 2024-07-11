import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function ProtctedRoute() {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(store => store.user.user.jwtToken)

  //check if user is authenticated
  useEffect(function () {
    if (!isAuthenticated) navigate("/")
  }, [])

  // ???
}