import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      

      <main className="min-h-[calc(100vh-73px)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Welcome to PrepAI
          </h1>

          <p className="mt-4 text-lg">
            AI-Powered Interview Preparation Platform
          </p>
        </div>
      </main>
    </>
  );
}