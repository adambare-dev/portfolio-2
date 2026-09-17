function Port() {
  return (
    <div>
      <section class="flex flex-col  gap-6 md:flex-row justify-between items-center p-5">
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold tracking-tight">About</h3>
          <p class="font-mono leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            mollitia soluta dolores quisquam quia ex ab quas odit pariatur et
            reiciendis sequi ipsum atque iusto ratione cum. Et, temporibus illo.
          </p>
          <button class="py-3 px-6 my-4 mb-3 bg-slate-800 rounded-lg font-semibold">
            View My projects
          </button>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9qqwC_-TZCzsZjVvH-FpZEueo_oH09KAUE5psPK5fQ&s=10"
            alt=""
            class="w-[230px] h-[230px] max-w-[300px] rounded-full object-cover"
          />
        </div>
      </section>

      <main class="max-w-6xl mx-auto my-8 p-6">
        <article class="my-6 p-5 text-center md:text-left">
          <h1 class="text-5xl font-extrabold text-white tracking-tighter mb-5">
            Featured projects
          </h1>
          <p class="leading-relaxed text-lg max-w-sm">
            A collection of recent projects that demonstrate my skills in
            frontend development, design systems, and creative technology.
          </p>
        </article>

        <section class="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-6">
          <div class="relative h-[18.75rem] w-full overflow-hidden flex justify-center items-center rounded-lg">
            <div class="absolute w-[180%] h-[180%] bg-[conic-gradient(#31a2ed,#7000ff,#64dd17,transparent_100%)] animate-[spin_9s_linear_infinite]"></div>
            <article class="absolute inset-[.5px] z-100 bg-slate-900 px-4 py-3 rounded-lg border border-slate-800 group">
              <section class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="bg-slate-800 h-12 w-14 flex justify-center items-center rounded-lg p-3 font-bold tex-lg text-cyan-500">
                    ⚡
                  </span>

                  <div class="flex gap-2">
                    <p class="bg-slate-800 flex justify-center items-center rounded-lg py-1 px-2 text-cyan-500">
                      React js
                    </p>
                    <p class="bg-slate-800 flex justify-center items-center rounded-lg py-1 px-2">
                      Taiwlind
                    </p>
                  </div>
                </div>
              </section>
              <h3 class="font-bold text-3xl tracking-tighter mt-5 group-hover:text-blue-500">
                Firts development
              </h3>
              <p class="text-slate-500 my-4">
                Lorem, ipsum dolor sit amet i while going to th market and all
                of the,m is generaly fine OK!
              </p>
              <button class="py-3 px-6 my-4 mb-3 bg-slate-800 rounded-lg font-semibold">
                Veiw case study
              </button>
            </article>
          </div>
          <div class="relative h-[18.75rem] w-full overflow-hidden flex justify-center items-center rounded-lg">
            <div class="absolute w-[180%] h-[180%] bg-[conic-gradient(#00f2fe,#7000ff,#64dd17,transparent_100%)] animate-[spin_9s_linear_infinite]"></div>
            <article class="absolute inset-[.5px] z-100 bg-slate-900 px-4 py-3 rounded-lg border border-slate-800 group">
              <section class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="bg-slate-800 h-12 w-14 flex justify-center items-center rounded-lg p-3 font-bold tex-lg text-green-400">
                    //
                  </span>

                  <div class="flex gap-2">
                    <p class="bg-slate-800 flex justify-center items-center rounded-lg py-1 px-2 text-cyan-500">
                      React js
                    </p>
                    <p class="bg-slate-800 flex justify-center items-center rounded-lg py-1 px-2 text-red-300">
                      Framer
                    </p>
                  </div>
                </div>
              </section>
              <h3 class="font-bold text-3xl tracking-tighter mt-5 group-hover:text-blue-500">
                Firts development
              </h3>
              <p class="text-slate-500 my-4">
                Lorem, ipsum dolor sit amet i while going to th market and all
                of the,m is generaly fine OK!
              </p>
              <button class="py-3 px-6 my-4 mb-3 bg-slate-800 rounded-lg font-semibold">
                Veiw case study
              </button>
            </article>
          </div>
          <div class="relative h-[18.75rem] w-full overflow-hidden flex justify-center items-center rounded-lg">
            <div class="absolute w-[180%] h-[180%] bg-[conic-gradient(#00f2fe,#7000ff,#64dd17,transparent_100%)] animate-[spin_9s_linear_infinite]"></div>
            <article class="absolute inset-[.5px] z-100 bg-slate-900 px-4 py-3 rounded-lg border border-slate-800 group">
              <section class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="bg-slate-800 h-12 w-14 flex justify-center items-center rounded-lg p-3 font-bold tex-lg text-cyan-500">
                    &lt;/&gt;
                  </span>

                  <div class="flex gap-2">
                    <p class="bg-slate-800 flex justify-center items-center rounded-lg py-1 px-2 text-cyan-500">
                      React js
                    </p>
                    <p class="bg-slate-800 flex justify-center items-center rounded-lg py-1 px-2 text-cyan-500">
                      Taiwlind
                    </p>
                  </div>
                </div>
              </section>
              <h3 class="font-bold text-3xl tracking-tighter mt-5 group-hover:text-blue-500">
                Firts development
              </h3>
              <p class="text-slate-500 my-4">
                Lorem, ipsum dolor sit amet i while going to th market and all
                of the,m is generaly fine OK!
              </p>
              <button class="py-3 px-6 my-4 mb-3 bg-slate-800 rounded-lg font-semibold">
                Veiw case study
              </button>
            </article>
          </div>
        </section>
      </main>
      <footer class="border-t border-slate-800 mt-20">
        <div class="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-slate-500">
          <p>&copy; my 2026 Portfolio. All rights reserved. Made with ❤️</p>
          <p class="mt-2">Code inspired by you.</p>
        </div>
      </footer>
    </div>
  );
}

export default Port;
