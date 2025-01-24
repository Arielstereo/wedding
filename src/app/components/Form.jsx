"use client"

import { useActionState, useState } from "react";
import { Toaster, toast } from "sonner";

const Form = () => {
  const [data, setData] = useState(null);
  console.log(data);

  const validationForm = (username, lastName, email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!username || !lastName || !email) {
          resolve("Todos los campos son requeridos");
          return;
        }

        resolve();
      }, 3000);
    });
  };

  const send = async (prevState, formData) => {
    const username = formData.get("username");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");
    const error = await validationForm(username, lastName, email);
    if (error) return error;

    setData({ username, lastName, email, message }); 
    toast.success(`Gracias ${username} por confirmar tu presencia!`);
    
  };
  const [error, submitAction, isPending] = useActionState(send);
  console.log(error);

  return (
    <div>
      <Toaster />
      <form
        action={submitAction}
        className="flex flex-col w-fit md:w-96 mx-auto gap-6"
      >
        <input
          className="p-2 md:p-3 border border-yellow-600 rounded-lg"
          type="text"
          placeholder="Nombre"
          name="username"
        />
        <input
          className="p-2 md:p-3 border border-yellow-600 rounded-lg"
          type="text"
          placeholder="Apellido"
          name="lastName"
        />
        <input
          className="p-2 md:p-3 border border-yellow-600 rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 md:p-3 border border-yellow-600 rounded-lg"
          cols={8}
          type="text"
          placeholder="Mensaje"
          name="message"
        />
        <button
          type="submit"
          disabled={isPending}
          className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 text-2xl text-yellow-500 hover:text-yellow-400 font-semibold"
        >
          <span>{isPending ? "Cargando.. " : "Confirmar"}</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20"></div>
          </div>
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Form;
