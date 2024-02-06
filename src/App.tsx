function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="container_card  max-w-4xl w-full grid shadow-lg grid-cols-2">
        <div className="h-96 bg-[url('/img/patterns.svg')] rounded-l-lg back_patterns"></div>
        <div className="p-5 bg-[#fff] rounded-r-md">
          <header className="text-center flex flex-col justify-center">
            <a href="#" className="font-normal text-xl text-zinc-500">
              Morphosis
            </a>
            <small className="text-zinc-400">Focados em Proteger seus Dados</small>
          </header>
        </div>
      </div>
    </main>
  );
}

export default App;
