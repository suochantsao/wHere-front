export default function Header() {
  return (
    <header className="bg-white fixed top-[0] left-[0] w-[100vw]">
      <div className="flex items-center">
        <div className="font-bold">THIS IS LOGO</div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Product Features
          </a>
          <a href="#" className="hover:underline">
            Discussion Forum
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
        </nav>
        <div className="space-x-2">
          <button className="text-sm px-3 py-1 border rounded">Login</button>
          <button className="text-sm px-3 py-1 bg-gray-800 text-white rounded">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
