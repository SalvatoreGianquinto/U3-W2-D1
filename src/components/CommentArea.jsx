import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

const API =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzYzM0MTVjZmRmODAwMTUwY2U1MWEiLCJpYXQiOjE3NDQwMjg0ODEsImV4cCI6MTc0NTIzODA4MX0.wc-hv4R9xL8nOA4yGWrdQP2Pm-CaXFS6n3bVhez1sVo"

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  Comments = () => {
    if (!this.props.asin) return

    this.setState({ isLoading: true, isError: false })

    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization: "Bearer " + API,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          response.json().then((comments) => {
            this.setState({
              comments: comments,
              isLoading: false,
              isError: false,
            })
          })
        } else {
          this.setState({ isLoading: false, isError: true })
        }
      })
      .catch((error) => {
        console.log(error)
        this.setState({ isLoading: false, isError: true })
      })
  }

  componentDidMount() {
    this.Comments()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.Comments()
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.props.asin && (
          <>
            <AddComment asin={this.props.asin} />
            <CommentList commentsToShow={this.state.comments} />
          </>
        )}
      </div>
    )
  }
}

export default CommentArea
