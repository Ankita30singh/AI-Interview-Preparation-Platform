export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 border rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Login to continue your interview preparation
        </p>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-black text-white"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}