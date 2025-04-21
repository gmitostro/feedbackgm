import { useState } from "react"
import IllustrationThankYou from "./images/illustration-thank-you.svg"
import { CardInicial } from "./components/CardInicial"



export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleSubmit() {
    if (notaAvaliacao !== 0) {
      setSubmited(true)
      return
    }
    alert("Please select a rating first")
  }
  function handAlterarNotaAvaliacao(nota) {
    setNotaAvaliacao(nota)

  }

  return (
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited} />
    ) : (
      <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass max-w-103">
        <img className="mx-auto mb-6" src={IllustrationThankYou} alt="illustration Thank You" />

        <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6">You selected {notaAvaliacao} out of 5</p>

        <h1 className="text-2xl font-bold mb-2.5 text-center">Thank You!</h1>
        <p className="text-light-grey text-sm leading-1 mb-6 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"</p>
      </div>
    )
  )
}