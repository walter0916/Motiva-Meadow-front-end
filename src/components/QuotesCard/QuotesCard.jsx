// npm services
import { useState, useEffect } from "react"

const QuotesCard = (props) => {
  const [randomQuote, setRandomQuote] = useState('')

  useEffect(() => {
    if (props.quotes && props.quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * props.quotes.length)
      setRandomQuote(props.quotes[randomIndex])
    }
  }, [props.quotes])

  return (
    <div className="bg-blue-100 border border-blue-400 text-blue-700 rounded-lg shadow-lg h-80 p-4">
      <p className="text-lg font-bold">{randomQuote.text}</p>
      <p className="text-sm">- {randomQuote.author && randomQuote.author.replace("type.fit", "").trim()}</p>
    </div>
  )
}

export default QuotesCard