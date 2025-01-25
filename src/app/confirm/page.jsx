import Form from '../components/Form'
import BackButton from '../components/BackButton';

const Confirm = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-screen px-4 relative bg-slate-900'>
      <BackButton />
      <h1 className="text-center text-slate-100 font-bold text-2xl lg:text-4xl">Completa el formulario para confirmar tu asistencia</h1>
      <Form />
    </div>
  )
}

export default Confirm