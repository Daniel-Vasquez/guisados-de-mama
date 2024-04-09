export const Form = ({ handleSubmit, setClientInfo, clientInfo }) => {
  const { name, phone, email, message } = clientInfo

  return (
    <form onSubmit={handleSubmit} className="w-11/12 m-4 mx-auto p-8 bg-blue-medium border border-grey rounded-md md:max-w-md">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-grey-400 appearance-none focus:outline-none focus:ring-0 focus:border-golden peer focus:bg-red"
            name="user"
            value={name}
            onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
            type="text"
            placeholder=" "
            required
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-golden peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            htmlFor="name"
          >
            Nombre
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-grey-400 appearance-none focus:outline-none focus:ring-0 focus:border-golden peer"
            value={phone}
            onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
            name="number"
            type="tel"
            placeholder=" "
            required
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-golden peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            htmlFor="email"
          >
            Número celular
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-grey-400 appearance-none focus:outline-none focus:ring-0 focus:border-golden peer"
          value={email}
          onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
          name="email"
          type="email"
          placeholder=" "
          required
        />
        <label
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-golden peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          htmlFor="email"
        >
          Correo
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <textarea
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-grey-400 appearance-none focus:outline-none focus:ring-0 focus:border-golden peer"
          style={{
            resize: "none",
            formSizing: "content",
          }}
          name="message"
          value={message}
          onChange={(e) => setClientInfo({ ...clientInfo, message: e.target.value })}
          type="email"
          placeholder=" "
        />
        <label
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-golden peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          htmlFor="message"
        >
          Mensaje
        </label>
      </div>

      <div className="flex w-full justify-center">
        <button
          className="text-black bg-white font-black rounded-lg text-base w-full opacity-80 sm:w-auto px-12 py-3 text-center disabled:cursor-not-allowed hover:opacity-100"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
