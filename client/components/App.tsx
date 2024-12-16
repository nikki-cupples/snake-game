import Footer from './Home/Footer'
import Header from './Home/Header'
import Main from './Main/Main'

function App() {
  return (
    <>
      <>
        <div
          id="app"
          className="bg-gradient-to-br from-[#f8a7dd] to-pink-500 h-screen w-full flex flex-col overflow-hidden"
        >
          <div className="flex-grow flex flex-col items-center justify-between">
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </>
    </>
  )
}

export default App
