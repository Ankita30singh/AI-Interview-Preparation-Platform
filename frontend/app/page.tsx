export default function Home() {
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <section className="min-h-[calc(100vh-73px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider">
              AI-Powered Interview Preparation
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
              Prepare Smarter.
              <br />
              Interview Better.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Practice realistic interviews, get instant AI feedback,
              and improve your interview performance with personalized
              preparation.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-black text-white font-medium">
                Start Practicing
              </button>

              <button className="px-6 py-3 rounded-lg border font-medium">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-8">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider">
              Why PrepAI?
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Everything you need to prepare better
            </h2>

            <p className="mt-4 text-gray-600">
              Practice, receive feedback, and track your improvement
              with one AI-powered platform.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-2xl border p-8">
              <div className="text-3xl">🎤</div>

              <h3 className="mt-5 text-xl font-semibold">
                AI Mock Interviews
              </h3>

              <p className="mt-3 text-gray-600">
                Practice realistic technical and HR interviews
                with AI-generated questions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border p-8">
              <div className="text-3xl">💡</div>

              <h3 className="mt-5 text-xl font-semibold">
                Smart Feedback
              </h3>

              <p className="mt-3 text-gray-600">
                Get personalized feedback on your answers
                and identify areas for improvement.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border p-8">
              <div className="text-3xl">📊</div>

              <h3 className="mt-5 text-xl font-semibold">
                Performance Analytics
              </h3>

              <p className="mt-3 text-gray-600">
                Track your interview performance and monitor
                your progress over time.
              </p>
            </div>

          </div>
        </div>
      </section>
            {/* ==================== CTA SECTION ==================== */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="rounded-3xl bg-black text-white px-8 py-16 text-center">
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to ace your next interview?
            </h2>

            <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
              Start practicing with PrepAI and build the confidence
              you need to perform your best in interviews.
            </p>

            <button className="mt-8 px-7 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200">
              Start Practicing
            </button>

          </div>
        </div>
      </section>
            {/* ==================== FOOTER ==================== */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div>
              <h2 className="text-xl font-bold">PrepAI</h2>
              <p className="mt-1 text-sm text-gray-600">
                AI-powered interview preparation platform.
              </p>
            </div>

            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/" className="hover:text-black">
                Home
              </a>

              <a href="/login" className="hover:text-black">
                Login
              </a>

              <a href="#" className="hover:text-black">
                Privacy
              </a>

              <a href="#" className="hover:text-black">
                Terms
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
            © 2026 PrepAI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}