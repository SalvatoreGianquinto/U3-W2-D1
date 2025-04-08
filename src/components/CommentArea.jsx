import { useState, useEffect } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

const API =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzYzM0MTVjZmRmODAwMTUwY2U1MWEiLCJpYXQiOjE3NDQwMjg0ODEsImV4cCI6MTc0NTIzODA4MX0.wc-hv4R9xL8nOA4yGWrdQP2Pm-CaXFS6n3bVhez1sVo"

const CommentArea = function ({ asin }) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!asin) return

    setIsLoading(true)
    setIsError(false)

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization: "Bearer " + API,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dei commenti")
        }
      })
      .then((data) => {
        setComments(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsError(true)
        setIsLoading(false)
      })
  }, [asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      {asin && (
        <>
          <AddComment asin={asin} />
          <CommentList commentsToShow={comments} />
        </>
      )}
    </div>
  )
}

export default CommentArea
