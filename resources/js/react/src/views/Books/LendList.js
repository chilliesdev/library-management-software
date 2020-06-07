import React,{ useState, useEffect, useContext } from 'react'
import { AppContext } from '../../Context'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import {
  Button,
  Table,
	Card,
  CardBody,
  CardText,
  CardHeader,
  Spinner,
} from 'reactstrap'

export default function Lendlist({ 
  dataUrl,
  dataPost,
  toggleToast, 
  toggleLoading,
}) {

  const context = useContext(AppContext)
  const {
    library, 
    user, 
  } = context

  const [loading,setLoading] = useState(true)
  const [customers,setCustomers] = useState([])
  const [url,setUrl] = useState(`/api/${dataUrl}`)
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
    pagination.current_page != pagination.last_page && getCustomers(true)
  }

  function reloadCustomer () {
    setLoading(true)

    function onGet (response) {
      setLoading(false)
      setCustomers(response.data.data)
      setUrl(response.data.next_page_url)
      setButtonDisabled( response.data.current_page === response.data.last_page ? true : false)
      makePagination(response.data)
    }

    if ( dataPost ) {
      axios.post(`/api/${dataUrl}`,dataPost)
      .then(response => onGet(response))
      .catch(error => setTimeout(() => reloadCustomer() ,5000 ))
    } else {
      axios.get(`/api/${dataUrl}`)
      .then(response => onGet(response))
      .catch(error => setTimeout(() => reloadCustomer() ,5000 ))
    }
  }

  function getCustomers(getMore = false){
    getMore && setSpinner(true)

    function onGet (response) {
      getMore ? setSpinner(false) : setLoading(false)
      setCustomers(customers.length > 0 ? customers.concat(response.data.data): response.data.data)
      setUrl(response.data.next_page_url)
      setButtonDisabled( response.data.current_page === response.data.last_page ? true : false)
      makePagination(response.data)
    }

    if ( dataPost ) {
      axios.post(url,dataPost)
      .then(response => onGet(response))
      .catch(error => setTimeout(() => getCustomers() ,5000))
    } else {
      axios.get(url)
      .then(response => onGet(response) )
      .catch(error => setTimeout(() => getCustomers() ,5000))
    }

  }

  function handleReturn (customerId,bookId) {
    const data = {
      book: bookId,
      library: library,
      customer: customerId,
      user: user.id,
    }
    axios.post('/api/returnbook',data)
    .then(response => {
      console.log(response.data)
      toggleLoading(false)
      reloadCustomer()
      toggleToast('Book has been returned successfully','Success')
    }).catch(error => {
      toggleToast('Book not returned!','Error')
      console.error(error.response)
    })
  }

  useEffect(() => {
    getCustomers()
  },[])

  return (
    <Card>
      <CardBody className="text-center">
        <CardText className="h4 mb-2 mt-n2 text-left">Lend List</CardText>
        <hr/>
        {loading ? <Loading type="sm"/>: 
          customers.length < 1 ? <strong>No data</strong> :
          <div>
            <Table responsive hover borderless>
              <tbody>
                {customers.map(data =>
                  <tr className="text-left" key={data.id}>
                    { dataPost ? <td className="text-capitalize font-weight-bold w-75"><Link to={`/customers/${data.customers.id}`}>{data.customers.name}</Link></td> :
                      <td className="text-capitalize w-75 d-flex flex-column">
                        <Link className="h6 text-dark overflow-hidden" to={`/customers/${data.customers.id}`}>{data.customers.name}</Link>
                        <Link className="text-dark overflow-hidden" to={`/books/${data.books.id}`}>{data.books.name}</Link>
                      </td>
                    }
                    
                    <td className="font-weight-light w-25" >
                      <Button 
                        color="danger" 
                        className="btn-sm"
                        onClick={() => handleReturn(data.customer_id,data.book_id)}
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
