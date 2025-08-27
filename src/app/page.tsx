import Head from "next/head";

export default function Login() {
  return (
    <main className="flex justify-center items-center w-screen h-screen bg-stone-200">
      <section className="flex flex-row w-280 h-190 p-4 bg-white rounded-3xl">
        <section className="bg-stone-200 w-105 rounded-3xl p-4">
          <img
            src="/images/main.webp"
            alt="Robot"
            className="absolute w-180 left-35 bottom-70"
          />
        </section>

        <section className="flex flex-col w-1/3 justify-center p-4 ml-40 text-black">
          <header className="text-gray-400 absolute top-40 right-80">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-black">
              Sign up
            </a>
          </header>

          <h1 className="text-5xl font-bold mb-7">Sign in</h1>
          <form>
            <fieldset className="mb-4">
              <legend className="text-sm mb-4">
                Sign in with Open account
              </legend>
              <div className="flex justify-between space-x-1.5">
                <button className="w-1/2 p-2 bg-white border border-gray-200 rounded-2xl flex justify-center items-center">
                  <img
                    src="/images/google.svg"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Google
                </button>
                <button className="w-1/2 p-2 bg-white border border-gray-200 rounded-2xl flex justify-center items-center">
                  <img
                    src="/images/apple.svg"
                    alt="Apple"
                    className="w-5 h-5 mr-2"
                  />
                  Apple ID
                </button>
              </div>
            </fieldset>
            <hr className="border-2 border-stone-100 rounded-2xl mt-6 mb-7"></hr>

            <p className="text-sm mb-2">Or continue with email address</p>
            <span className="flex flex-row mb-3 w-full p-2 bg-stone-100 rounded-md items-center">
              <img
                src="/images/mail.svg"
                alt="email"
                className="w-5 h-5 mr-2"
              />
              <input type="email" placeholder="tam@ui8.net" />
            </span>
            <span className="flex flex-row mb-3 w-full p-2 bg-stone-100 rounded-md items-center ">
              <img
                src="/images/password.svg"
                alt="password"
                className="w-5 h-5 mr-2"
              />
              <input type="password" placeholder="•••••••••••••••••••" />
            </span>
            <button className="w-full p-2 bg-blue-600 text-white rounded-2xl">
              Start trading
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
