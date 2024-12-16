import Footer from './Home/Footer'
import Header from './Home/Header'
import Main from './Main/Main'

function App() {
  return (
    <>
      <div
        id="app"
        className="bg-gradient-to-br from-[#f8a7dd] to-pink-500 min-h-screen flex flex-col"
      >
        <div className="flex-grow">
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
