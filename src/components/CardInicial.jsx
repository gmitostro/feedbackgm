import iconStar from "../images/icon-star.svg"
import { InputButton } from "./InputButton"
 
 export function Cardinicial({ setNotaAvaliacao, notaAvaliacao, setSubmited }) {
 
       function handleSubmit() {
         if (notaAvaliacao !== 0) {
           setSubmited(true)
           return
         }
     
         alert("Please, choose a note!")
       }
 
     return(
         <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
         <div className="bg-dark-blue w-fit p-4 rounded-full mb-4">
           <img src={iconStar} alt="icon star" />
         </div>
   
         <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
   
         <p className="text-sm text-light-grey mb-6 leading-1">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
   
         <div className="flex justify-between mb-6">
         <InputButton value={1} setNotaAvaliacao={setNotaAvaliacao} />
         <InputButton value={2} setNotaAvaliacao={setNotaAvaliacao} />
         <InputButton value={3} setNotaAvaliacao={setNotaAvaliacao} />
         <InputButton value={4} setNotaAvaliacao={setNotaAvaliacao} />
         <InputButton value={5} setNotaAvaliacao={setNotaAvaliacao} />
         </div>
   
         <button onClick={handleSubmit} className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3 hover:bg-white hover:text-orange hover:cursor-pointer duration-500">Submit</button>
       </div>
     )
 }