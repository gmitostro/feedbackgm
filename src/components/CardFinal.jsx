import illustrationThankYou from "../assets/illustration-thank-you.svg"

export function CardFinal({ notaAvaliacao }) {
    return(
        <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
        <img className="mx-auto mb-6" src={illustrationThankYou} alt="illustration Thank You" />

      <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6">You selected {notaAvaliacao} out of 5</p>

      <h1 className="text-2xl font-bold mb-2.5 text-center">Thank You!</h1>
      <p className="text-sm text-light-grey leading-1 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
    )
}