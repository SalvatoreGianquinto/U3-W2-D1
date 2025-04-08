import { Button, ListGroup } from "react-bootstrap"

const SingleComment = ({ comment }) => {
  const deleteComment = (asin) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y1MDJjYTgxYjBkZDAwMTUwYTdhNTQiLCJpYXQiOjE3NDQxMTAyODIsImV4cCI6MTc0NTMxOTg4Mn0.aLDydVwpeWSKRw24W6V_IKX4Xbit998D6MN9bd1qrVk",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("La recensione è stata eliminata!")
        } else {
          throw new Error("La recensione non è stata eliminata!")
        }
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
