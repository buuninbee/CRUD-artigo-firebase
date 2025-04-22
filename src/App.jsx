function App() {
  return (
    <>
    <main className="grid mx-8 sm:mx-16 md:block md:m-auto md:max-w-[680px]">
      <form className="bg-[var(--bg-form)] grid mb-7 gap-3 px-5 py-6 mt-20 border border-[var(--border)] rounded-lg" action="">
        <div className="grid gap-5 pb-5">         
          <div className="grid gap-2">
            <label htmlFor="despOuRecei" className="text-xl sm:text-2xl">Isso se refere a uma receita ou a uma despesa?</label>
            <div className="flex gap-4">
              <div className="flex gap-3">
                <input type="radio" name="despOuRecei" id="despOuRecei" />
                <label className="text-xl" htmlFor="">Receita</label>
              </div>

              <div className="flex gap-3">
                <input type="radio" name="despOuRecei" id="despOuRecei" />
                <label className="text-xl" htmlFor="">Despesa</label>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="qualTipo" className="text-xl sm:text-2xl">Qual o tipo da transação? </label>
            <input placeholder="aluguel, cartão de credito, luz..." className="border border-[var(--border)] py-2 px-4" type="text" name="qualTipo" id="qualTipo" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="qualValor" className="text-xl sm:text-2xl">Qual o valor da transação? </label>
            <input placeholder="1000" className="border border-[var(--border)] py-2 px-4" type="number" name="qualValor" id="qualValor" />
          </div>
        </div>
        <button className="bg-[var(--text-default)] text-[var(--on-brand)] text-xl py-2 rounded-sm cursor-pointer">Enviar</button>
      </form>

      <section className="">
        <h1 className="text-3xl pb-6">Transações</h1>
          <div className="grid gap-6">
            <div className="flex justify-center border border-[var(--outline)] rounded-xl">
              <button className="w-full cursor-pointer rounded-l-xl  py-2 ">Todas</button>
              <button className="w-full cursor-pointer border-x border-[var(--outline)] px-5 py-2">Receitas</button>
              <button className="w-full cursor-pointer rounded-r-xl py-2">Despesas</button>
            </div>

            <div className="bg-[var(--bg-receita)] grid gap-5 py-6 px-4 rounded-xl">
              <div>
                <h3 className="text-sm pb-2 sm:text-lg">Salario - Receita</h3>
                <p className="text-2xl sm:text-3xl">R$ 2400,00</p>
              </div>

              <div className="flex gap-2 justify-around mx-4">
                <button className="bg-[var(--on-primary-container)] text-[var(--secondary-container)] rounded-sm py-1 w-full cursor-pointer">Editar</button>
                <button className="bg-[var(--secondary-container)] py-1 w-full rounded-sm cursor-pointer">Excluir</button>
              </div>

              <div>
                <form className="bg-[var(--bg-form)] grid mb-7 gap-3 px-5 py-6 border border-[var(--border)] rounded-lg" action="">
                  <div className="grid gap-5 pb-5">         
                    <div className="grid gap-2">
                      <label htmlFor="despOuRecei" className="text-xl sm:text-2xl">Isso se refere a uma receita ou a uma despesa?</label>
                      <div className="flex gap-4">
                        <div className="flex gap-3">
                          <input type="radio" name="despOuRecei" id="despOuRecei" />
                          <label className="text-xl" htmlFor="">Receita</label>
                        </div>

                        <div className="flex gap-3">
                          <input type="radio" name="despOuRecei" id="despOuRecei" />
                          <label className="text-xl" htmlFor="">Despesa</label>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="qualTipo" className="text-xl sm:text-2xl">Qual o tipo da transação? </label>
                      <input placeholder="aluguel, cartão de credito, luz..." className="border border-[var(--border)] py-2 px-4" type="text" name="qualTipo" id="qualTipo" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="qualValor" className="text-xl sm:text-2xl">Qual o valor da transação? </label>
                      <input placeholder="1000" className="border border-[var(--border)] py-2 px-4" type="number" name="qualValor" id="qualValor" />
                    </div>
                  </div>
                  <button className="bg-[var(--text-default)] text-[var(--on-brand)] text-xl py-2 rounded-sm cursor-pointer">Atualizar</button>
                </form>
              </div>

            </div>
          </div>
      </section>
    </main>
    </>
  )
}

export default App
