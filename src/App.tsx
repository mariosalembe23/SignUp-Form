function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="container_card  max-w-4xl w-full grid shadow-lg grid-cols-2">
        <div className="h-96 bg-[url('/img/patterns.svg')] rounded-l-lg back_patterns"></div>
        <div className="p-5 bg-[#fff] rounded-r-md">
          <header className="text-center flex flex-col justify-center">
            <a href="#" className=" text-xl text-indigo-400 font-medium">
              Morphosis
            </a>
            <small className="text-zinc-400">
              Focados em Proteger seus Dados
            </small>
          </header>

          <div className="form_container mt-8">
            <form className="w-full">
              <div className="container_inputs grid grid-cols-1 gap-5">
                <div className="input_group space-y-3 flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-zinc-500 font-ligt font-['Inter'] px-3"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 py-2.5 outline-none transition-all focus:ring-2 ring-zinc-300 rounded bg-gray-100 placeholder:text-zinc-500 "
                    placeholder="mario@gmail.com"
                  />
                </div>
                <div className="input_group space-y-3 flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-zinc-500 font-ligt font-['Inter'] px-3"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-3 py-2.5 outline-none transition-all focus:ring-2 ring-zinc-300 rounded bg-gray-100 placeholder:text-zinc-500 "
                    placeholder="*********"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
