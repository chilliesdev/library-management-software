import React,{ useState, useEffect, useContext } from 'react'
import { AppContext } from '../../Context'
import axios from 'axios'
import Loading from '../components/Loading'
import {
  Button,
  Table,
	Card,
  CardBody,
  CardText,
  Spinner,
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Lendlist({ 
  customer, 
  toggleToast, 
  toggleLoading,
}) {
  const context = useContext(AppContext)
  const { library, user } = context

  const [loading,setLoading] = useState(true)
  const [books,setBooks] = useState([])
  const [url,setUrl] = useState('/api/customerbooks')
  const [pagination,setPagination] = useState([])
  const [buttonDisabled,setButtonDisabled] = useState(false)
  const [spinner,setSpinner] = useState(false)

  function makePagination (data) {
    setPagination({
      current_page: data.current_page,
      last_page: data.last_page,
      next_page_url: data.next_page_url,
      prev_page_url: data.prev_page_url,
    })
  }

  function loadMore () {
    setUrl(pagination.next_page_url)
    pagination.current_page != pagination.last_page && getBooks(true)
  }

  function reloadBooks () {
    setLoading(true)
    axios.post('/api/customerbooks',{
      customer: customer,
      library: library,
    }).then(response => {
      setLoading(false)
      setBooks(response.data.data)
      setUrl(response.data.next_page_url)
      setButtonDisabled( response.data.current_page === response.data.last_page ? true : false)
      makePagination(response.data)
    })
    .catch(error => {
      console.error(error.response)
      reloadBooks()
    })
  }

  function getBooks(getMore = false){
    getMore && setSpinner(true)
    axios.post(url,{
      customer: customer,
      library: library,
    })
      .then(response => {
        getMore ? setSpinner(false) : setLoading(false)
        setBooks(books.length > 0 ? books.concat(response.data.data): response.data.data)
        setUrl(response.data.next_page_url)
        setButtonDisabled( response.data.current_page === response.data.last_page ? true : false)
        makePagination(response.data)
      })
      .catch(error => {
        console.error(error.response)
        getBooks()
      })
  }

  function handleReturn (bookId) {
    toggleLoading(true)
    const data = {
      book: bookId,
      library: library,
      customer: customer,
      user: user.id,
    }
    // return console.log(data)
    axios.post('/api/returnbook',data)
    .then(response => {
      toggleLoading(false)
      toggleToast()
      reloadBooks()
    }).catch(error => {
      console.error(error.response)
    })
  }

  useEffect(() => {
    getBooks()
  },[])

  return (
    <Card>
      <CardText className="h3 text-left ml-3 mt-2">Book List</CardText>
      <hr className="mx-2 my-1"/>
      <CardBody className="text-center">
        {loading ? <Loading type="sm"/>: 
          books.length < 1 ? <strong>No data</strong> :
          <div>
            <Table responsive hover borderless>
              <tbody>
                {books.map(data =>
                  <tr className="text-left" key={data.id}>
                    <td className="text-capitalize font-weight-bold w-75"><Link to={`/books/${data.books.id}`}>{data.books.name}</Link></td>
                    <td className="font-weight-light w-25" >
                      <Button 
                        color="danger" 
                        className="btn-sm"
                        onClick={() => handleReturn(data.book_id)}
                      >Return</Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <div className="d-flex justify-content-center">
              <Button 
                color="dark" 
                className="btn-sm"
                disabled={buttonDisabled}
                onClick={loadMore}>
                { spinner ? <Spinner className="mx-3" color="light"/> : <i className="cui-chevron-bottom mx-3"></i>}
              </Button>
            </div>
          </div>
        }
      </CardBody>
    </Card>
  )
}
