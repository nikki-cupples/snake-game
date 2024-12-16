function Header() {
  return (
    <header className="flex flex-col items-center w-full rounded-b-lg bg-black py-6 mb-2 text-pink-500 animate-slide-in shadow-md">
      <h1 className="text-6xl font-bold">Snake</h1>
      <p className="mt-2 italic md:text-xl text-pink-500">
        pssst! how many blocks can you eat?
      </p>
    </header>
  )
}

export default Header
