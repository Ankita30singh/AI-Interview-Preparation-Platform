export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">PrepAI</h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}