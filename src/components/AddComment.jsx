import { useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"

const API =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzYzM0MTVjZmRmODAwMTUwY2U1MWEiLCJpYXQiOjE3NDQwMjg0ODEsImV4cCI6MTc0NTIzODA4MX0.wc-hv4R9xL8nOA4yGWrdQP2Pm-CaXFS6n3bVhez1sVo"

const AddComment = function ({ asin }) {
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState(1)
  const [elementId, setElementId] = useState(asin)

  useEffect(() => {
    setElementId(asin)
  }, [asin])

  const sendComment = (e) => {
    e.preventDefault()

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify({ comment, rate, elementId }),
      headers: {
        "Content-Type": "application/json",
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
      .then(() => {
        alert("Commento inviato con successo")
        setComment("")
        setRate(1)
        setElementId(asin)
      })
      .catch(() => {
        alert("Errore nel recupero dei commenti")
      })
  }
  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
