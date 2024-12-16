import HelpButton from '../Help/HelpButton'
import SnakeGame from '../SnakeGame/SnakeGame'

function Main() {
  return (
    <>
      <main>
        <HelpButton />
        <div className="text-center text-black font-bold justify-center">
          <SnakeGame />
        </div>
      </main>
    </>
  )
}

export default Main
