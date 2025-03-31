import {useState} from "react"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import iconStar from "./assets/icon-star.svg"


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
        <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass max-w-103">
          <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
            <img src={iconStar} alt="icon star" />
          </div>
          <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
    
          <p className="text-light-grey text-sm leading-1 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    
          <div className="flex justify-between mb-6">
            <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(1)}/>
            <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(2)}/>
            <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(3)}/>
            <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(4)}/>
            <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(5)}/>
          </div>
        
          <button onClick={handleSubmit} className="bg-orange w-full py-3 uppercase text-sm rounded-3xl tracking-1 font-bold hover:bg-white hover:text-orange cursor-pointer">Submit</button>
        </div>
      ) : (
        <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass max-w-103">
          <img className="mx-auto mb-6"src={illustrationThankYou} alt="illustrationThankYou" />

          <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6">You selected {notaAvaliacao} out of 5</p>

          <h1 className="text-2xl font-bold mb-2.5 text-center">Thank You!</h1>
          <p className="text-light-grey text-sm leading-1 mb-6 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"</p>
        </div>
      )
  )
}