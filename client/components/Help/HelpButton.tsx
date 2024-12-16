// Create help button with instructions to follow for users

import { useState } from 'react'

function HelpButton() {
  const [isHelpVisible, setIsHelpVisible] = useState(false)

  const toggleHelp = () => {
    setIsHelpVisible(!isHelpVisible)
  }

  return (
    <div className="mt-4 mr-16 flex flex-col justify-end items-end">
      <button
        onClick={toggleHelp}
        className="rounded-lg bg-black px-4 py-2 text-pink-500 shadow hover:bg-[#00BFA6] hover:text-black focus:outline-none focus:ring focus:ring-black"
        aria-expanded={isHelpVisible}
        aria-controls="help-text"
      >
        Hint
      </button>
      {isHelpVisible && (
        <>
          <p
            id="help-text"
            className="mt-2 rounded border border-black bg-[#33D1BA] p-3 text-sm text-black shadow-lg"
          >
            Welcome! You are a snake... begin using the arrow keys to move.
          </p>
          <p
            id="help-text"
            className="mt-2 rounded border border-black bg-[#33D1BA] p-3 text-sm text-black shadow-lg"
          >
            Eat the blocks and avoid the walls!
          </p>
        </>
      )}
    </div>
  )
}

export default HelpButton
