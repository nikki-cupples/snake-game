import { useEffect, useState } from 'react'
import HelpButton from '../Help/HelpButton'

function SnakeGame() {
  const [snake, setSnake] = useState([[5, 5]])
  const [food, setFood] = useState([2, 2])
  const [direction, setDirection] = useState('RIGHT')
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  const gridSize = 10

  // -- FOOD -- //
  const generateFood = () => {
    const x = Math.floor(Math.random() * gridSize)
    const y = Math.floor(Math.random() * gridSize)
    return [x, y]
  }

  useEffect(() => {
    setFood(generateFood())
  }, [])

  // -- MOVE SNAKE -- //
  useEffect(() => {
    const handleKeyPress = (event: { key: any }) => {
      console.log('Key Pressed:', event.key)
      switch (event.key) {
        case 'ArrowUp':
          setDirection((prev) => (prev !== 'DOWN' ? 'UP' : prev))
          break
        case 'ArrowDown':
          setDirection((prev) => (prev !== 'UP' ? 'DOWN' : prev))
          break
        case 'ArrowLeft':
          setDirection((prev) => (prev !== 'RIGHT' ? 'LEFT' : prev))
          break
        case 'ArrowRight':
          setDirection((prev) => (prev !== 'LEFT' ? 'RIGHT' : prev))
          break

        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // -- SNAKE -- //
  useEffect(() => {
    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake]
        const head = newSnake[newSnake.length - 1]
        let newHead

        switch (direction) {
          case 'UP':
            newHead = [head[0] - 1, head[1]]
            break
          case 'DOWN':
            newHead = [head[0] + 1, head[1]]
            break
          case 'LEFT':
            newHead = [head[0], head[1] - 1]
            break
          case 'RIGHT':
            newHead = [head[0], head[1] + 1]
            break
          default:
            return prevSnake
        }

        if (
          newHead[0] < 0 ||
          newHead[1] < 0 ||
          newHead[0] >= gridSize ||
          newHead[1] >= gridSize ||
          newSnake.some(
            (segment) => segment[0] === newHead[0] && segment[1] === newHead[1],
          )
        ) {
          setGameOver(true)
          return prevSnake
        }

        newSnake.push(newHead)

        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          setFood(generateFood())
          setScore((prevScore) => prevScore + 1)
        } else {
          newSnake.shift()
        }

        return newSnake
      })
    }

    if (!gameOver) {
      const interval = setInterval(moveSnake, 200)
      return () => clearInterval(interval)
    }
  }, [direction, food, gameOver])

  // -- RESET GAME -- //
  const handleResetGame = () => {
    setSnake([[5, 5]])
    setDirection('RIGHT')
    setFood(generateFood())
    setGameOver(false)
    setScore(0)
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <div
          className={`grid grid-cols-${gridSize} gap-1 bg-gray-800 p-4 sm:p-6 border-black rounded-lg`}
        >
          {[...Array(gridSize)].map((_, row) => (
            <div key={row} className="flex">
              {[...Array(gridSize)].map((_, col) => {
                const isSnake = snake.some(
                  (segment) => segment[0] === row && segment[1] === col,
                )
                const isFood = food[0] === row && food[1] === col
                return (
                  <div
                    key={`${row}-${col}`}
                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${
                      isSnake ? 'bg-[#00BFA6]' : isFood ? 'bg-pink-500' : ''
                    }`}
                  ></div>
                )
              })}
            </div>
          ))}
        </div>
        <div className="mt-2 ml-4 flex flex-col items-center">
          <button
            onClick={() => handleResetGame()}
            className="text-2xl sm:text-3xl m-2 rounded-lg bg-black px-4 py-2 text-pink-500 shadow hover:bg-[#00BFA6] hover:text-black focus:outline-none focus:ring focus:ring-black"
          >
            Start
          </button>
          <button className="text-2xl sm:text-3xl m-2 rounded-lg bg-black px-4 py-2 text-pink-500 shadow hover:bg-[#00BFA6] hover:text-black focus:outline-none focus:ring focus:ring-black">
            Score: {score}
          </button>
          <HelpButton />
        </div>
      </div>
    </>
  )
}

export default SnakeGame
