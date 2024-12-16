import { useState } from 'react'

function HelpButton() {
  const [isHelpVisible, setIsHelpVisible] = useState(false)

  const toggleHelp = () => {
    setIsHelpVisible(!isHelpVisible)
  }

  return (
    <div>
      <button
        onClick={toggleHelp}
        className="text-2xl sm:text-3xl m-2 rounded-lg bg-black px-4 py-2 text-pink-500 shadow hover:bg-[#00BFA6] hover:text-black focus:outline-none focus:ring focus:ring-black"
        aria-expanded={isHelpVisible}
        aria-controls="help-text"
      >
        Hint
      </button>
      {isHelpVisible && (
        <>
          <p
            id="help-text"
            className="top-1/4 md:top-1/3 right-1/2 md:text-xl m-4 absolute rounded border border-black bg-[#33D1BA] p-3 text-black shadow-lg"
          >
            Welcome! You are a snake... hit start and use your arrow keys to
            move.
            <br></br>
            No, you cannot go backwards.
            <br></br>
            Yes, you'll need a keyboard to play.
            <br></br>
            Click hint again to close the instructions.
          </p>
        </>
      )}
    </div>
  )
}

export default HelpButton
