import React, { useEffect, useRef, useState } from "react";

function App() {
  const [controllerInput, setControllerInput] = useState(false);
  const progressContent = useRef<HTMLDivElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const [controllerProgress, setControllerProgress] = useState(0);
  const [statusPassword, setStatusPassowrd] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [ValueInput, setValueInput] = useState("");
  function verifyPasswordRequires(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const valueInput: string = event.target.value;
    setControllerInput(valueInput.length !== 0);
    let indicator: number = 0;
    if (valueInput === "") setControllerProgress(0);
    if (/[a-z]/.test(valueInput)) indicator += 25;
    if (/[A-Z]/.test(valueInput)) indicator += 10;
    if (/[\d]/.test(valueInput)) indicator += 20;
    if (/[^a-zA-Z0-9]/.test(valueInput)) indicator += 45;

    setControllerProgress(indicator);
  }

  useEffect(() => {
    if (
      ValueInput !== "" &&
      controllerProgress > 35 &&
      controllerProgress < 100
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [ValueInput, controllerProgress]);

  useEffect(() => {
    if (progressContent.current) {
      progressContent.current.style.width = `${controllerProgress}%`;
    }

    if (controllerProgress <= 35) {
      progressContent.current?.classList.add("week_password");
      setStatusPassowrd("Password Fraca");
    }
    if (controllerProgress > 35 && controllerProgress < 100) {
      progressContent.current?.classList.add("medium_password");
      setStatusPassowrd("Password Razoável");
    }
    if (controllerProgress === 100) {
      progressContent.current?.classList.add("strong_password");
      setStatusPassowrd("Password Forte");
    }
  }, [controllerProgress]);

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="container_card  max-w-4xl w-full grid items-center shadow-lg grid-cols-2">
        <div className="h-[28rem] bg-[url('/img/patterns.svg')] rounded-l-lg back_patterns"></div>
        <div className="p-6 h-[28rem] bg-[#fff] rounded-r-md">
          <header className="text-center flex flex-col justify-center">
            <a href="#" className=" text-xl text-zinc-500 font-medium">
              Sign Up
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
                    ref={inputEmail}
                    onChange={(event) => setValueInput(event.target.value)}
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
                    onInput={verifyPasswordRequires}
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-3 py-2.5 outline-none transition-all focus:ring-2 ring-zinc-300 rounded bg-gray-100 placeholder:text-zinc-500 "
                    placeholder="*********"
                  />
                </div>
                <div className="">
                  <div>
                    <div className="progress_password mb-1 w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                      <div
                        ref={progressContent}
                        className={`status_progress w-[${controllerProgress}%] h-full bg-transparent rounded-full`}
                      ></div>
                    </div>
                    {controllerInput ? (
                      <small className="status_progress_text text-zinc-500">
                        {statusPassword}
                      </small>
                    ) : null}
                  </div>
                </div>

                <div>
                  <button
                    disabled={isButtonDisabled}
                    type="button"
                    className="w-full disabled:opacity-60 disabled:hover:bg-indigo-600  disabled:cursor-auto bg-indigo-600 transition-all hover:bg-indigo-700 py-3 rounded text-white font-medium cursor-pointer "
                  >
                    Cadastrar
                  </button>
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
