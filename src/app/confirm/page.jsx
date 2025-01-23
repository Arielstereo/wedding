import { Great_Vibes } from 'next/font/google';
import Form from '../components/Form'


const subtitle = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Confirm = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-screen'>
      <h1 className={`${subtitle.className} text-center text-yellow-600 text-4xl lg:text-7xl font-semibold `}>Completa el formulario para confirmar tu asistencia!</h1>
      <Form />
    </div>
  )
}

export default Confirm