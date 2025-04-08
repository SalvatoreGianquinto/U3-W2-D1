import { useState } from "react"
import SingleBook from "./SingleBook"
import { Col, Form, Row } from "react-bootstrap"

const BookList = function ({ books, onBookSelect }) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        {books
          .filter((b) =>
            b.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              {/*ogni libro viene reso SingleBooks e passiamo anche la prop*/}
              <SingleBook
                book={b}
                onSelect={() => onBookSelect(b.asin)}
                /* book list riceve onBookSelect dal padre (APP)*/
              />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default BookList
