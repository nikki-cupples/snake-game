// Create help button with instructions to follow for users

import { useState } from 'react'

function HelpButton() {
  const [isHelpVisible, setIsHelpVisible] = useState(false)

  const toggleHelp = () => {
    setIsHelpVisible(!isHelpVisible)
  }

  return (
    <div className="mt-4 mr-16 flex flex-col justify-end items-end relative">
      <button
        onClick={toggleHelp}
        className="rounded-lg text-xl bg-black px-4 py-2 text-pink-500 shadow hover:bg-[#00BFA6] hover:text-black focus:outline-none focus:ring focus:ring-black"
        aria-expanded={isHelpVisible}
        aria-controls="help-text"
      >
        Hint
      </button>
      {isHelpVisible && (
        <>
          <p
            id="help-text"
            className="top-16 text-xl w-1/4 absolute rounded border border-black bg-[#33D1BA] p-3 text-black shadow-lg"
          >
            Welcome! You are a snake... hit start and use your arrow keys to
            move.
            <br></br>
            No, you cannot go backwards.
          </p>
        </>
      )}
    </div>
  )
}

export default HelpButton
