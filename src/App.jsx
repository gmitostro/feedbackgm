import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"



export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handAlterarNotaAvaliacao(nota) {
    setNotaAvaliacao(nota)

  }

  function handleSubmit() {
    if (notaAvaliacao !== 0) {
      setSubmited(true)
      return
    }

    alert("Please select a rating first")
  }

  return (
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited} />
    ) : (

      <CardFinal notaAvaliacao={notaAvaliacao} />
    )
  )
}