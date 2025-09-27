export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-4 w-11/12 mx-auto text-gray-800">
        <a href="/" className="font-bold text-lg">CS — Ticket System</a>
        <div className="hidden md:flex items-center justify-center gap-4 text-sm font-medium">
          <a href="/">Home</a>
          <a href="/">FAQ</a>
          <a href="/">Changelog</a>
          <a href="/">Blog</a>
          <a href="/">Download</a>
          <a href="/">Contact</a>
          <button className="bg-linear-135 from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded text-white">+ New Ticket</button>
        </div>
      </nav>
    </header>
  )
}