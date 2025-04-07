import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  render() {
    const { book, onSelect } = this.props
    return (
      <Card onClick={onSelect} style={{ cursor: "pointer" }}>
        {" "}
        {/*Quando clicchiamo su un libro, viene invocato this.props.onSelect() → che invia il codice asin al componente App*/}
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
