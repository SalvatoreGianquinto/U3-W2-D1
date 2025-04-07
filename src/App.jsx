import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import { Container, Row, Col } from "react-bootstrap"
import BookList from "./components/BookList"
import CommentArea from "./components/CommentArea"
import fantasy from "./data/fantasy.json"
import { Component } from "react"

class App extends Component {
  state = {
    selectedAsin: null, //non selezioniamo nessun libro
  }

  //Questa funzione serve per dire: "quando qualcuno clicca su un libro, ricordati qual è stato selezionato".
  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin })
  }

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row className="mt-4">
            <Col md={8}>
              <BookList books={fantasy} onBookSelect={this.handleBookSelect} />{" "}
              {/* passiamo la funzione come prop*/}
            </Col>
            <Col md={4}>
              <CommentArea asin={this.state.selectedAsin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    )
  }
}

export default App
