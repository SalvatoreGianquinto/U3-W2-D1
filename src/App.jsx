import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import { Container, Row, Col } from "react-bootstrap"
import BookList from "./components/BookList"
import CommentArea from "./components/CommentArea"
import fantasy from "./data/fantasy.json"
import { useState } from "react"

const App = function () {
  const [selectedAsin, setSelectedAsin] = useState(null)

  //Questa funzione serve per dire: "quando qualcuno clicca su un libro, ricordati qual è stato selezionato".
  const handleBookSelect = (asin) => {
    setSelectedAsin(asin)
  }

  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Row className="mt-4">
          <Col md={8}>
            <BookList books={fantasy} onBookSelect={handleBookSelect} />{" "}
            {/* passiamo la funzione come prop*/}
          </Col>
          <Col md={4}>
            <CommentArea asin={selectedAsin} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
