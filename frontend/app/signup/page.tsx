export default function SignupPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">

        {/* Signup Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white text-xl font-bold">
            P
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            Create your account
          </h1>

          <p className="mt-2 text-gray-600">
            Start your personalized interview preparation journey.
          </p>
        </div>

        {/* Signup Card */}
        <div className="mt-8 rounded-2xl border bg-white p-8 shadow-sm">

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-2"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Create account
            </button>

          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-black hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Your information is securely protected.
        </p>
      </div>
    </main>
  );
}