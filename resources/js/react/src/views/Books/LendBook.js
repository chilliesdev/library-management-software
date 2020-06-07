import React, { useState, useContext } from 'react'
import { AppContext } from '../../Context'
import axios from 'axios'
import CreateCustomer from '../Customer/CreateCustomer'
import Alerts from '../components/Alerts'
import Loading from '../components/Loading'
import {
  Row,
  Col,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
  Input,
  Table,
  Spinner,
} from 'reactstrap'

export default function LendBook(props) {
  const Context = useContext(AppContext)
  const {
    user,
    library,
  } = Context

  const {
    book,
    lend,
    toggleLend,
    toggleToast,
    getBook,
  } = props

  const [search,setSearch] = useState('')
  const [loading,setLoading] = useState(false)
  const [fullLoading,setFullLoading] = useState(false)
  const [create,setCreate] = useState(false)
  const [spinner,setSpinner] = useState(false)
  const [errors,setErrors] = useState([])
  const [results,setResults] = useState([])
  const [url,setUrl] = useState('/api/searchcustomer')
  const [pagination,setPagingation] = useState([])
  const [buttonDisabled,setButtonDisabled] = useState(false)

  function makePagination (data) {
    setPagingation({
      current_page: data.current_page,
      last_page: data.last_page,
      next_page_url: data.next_page_url,
      prev_page_url: data.prev_page_url,
    })
  }

  function setIntialData () {
    setResults([])
    setLoading(true)
    getData('/api/searchcustomer','RELOAD')
  }

  function loadMore () {
    setUrl(pagination.next_page_url)
    if (pagination.current_page != pagination.last_page) {
      setSpinner(true)
      handleSearch(url)
    }
  }

  function toggleCreateCustomer () {
    setCreate(!create)
  }

  function getData(dataUrl,reload = null) {
    axios.post(dataUrl,{ 
      name: search,
    })
    .then(response => {
      setSpinner(false) 
      setLoading(false)
      if (reload === 'RELOAD'){
        setResults(response.data.data)
      }else{
        setResults(results.length > 0 ? results.concat(response.data.data) : response.data.data)
      }
      setUrl(response.data.next_page_url)
      setButtonDisabled( response.data.current_page === response.data.last_page ? true : false)
      makePagination(response.data)
    })
    .catch(error => console.error(error.response))
  }

  function handleSearch () {
    if ( !search ){
      setErrors(['Please insert a search input'])
      return false
    }

    getData(url)
    setErrors([])
  }

  function handleLend (customerId) {
    const data = {
      customer: customerId,
      book: book.id,
      library: library,
      user: user.id,
    }
    setFullLoading(true)
    axios.post('/api/lendbook',data)
    .then( response => {
      if (response.data.success == false){
        setFullLoading(false)
        toggleToast('This customer has already borrowed this book and is yet to return it')
        toggleLend()
      } else {
        setFullLoading(false)
        toggleLend()
        getBook()
      }
    })
    .catch( error => console.error(error.response) )
  }

  return (
    <Modal
      isOpen={lend}
      // className="modal-primary"
    >
      {fullLoading && <Loading/>}
      <CreateCustomer 
        create={create}
        toggleCreate={toggleCreateCustomer}
        handleLend={handleLend}
      />
      <ModalHeader toggle={toggleLend}>Lend</ModalHeader>
      <ModalBody>
        <Button
          color="primary"
          className="mb-2"
          block
          onClick={toggleCreateCustomer}
        >New Customer</Button>
        {errors && <Alerts message={errors} variant="danger"/>}
        <Row className="mb-4 mr-0 pr-0">
          <Col lg={11} md={10}>
            <Input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for customer"
            />
          </Col>
          <Col lg={1} md={2} className="d-flex justify-content-end pr-0">
            <Button
              color="dark"
              onClick={() => setIntialData()}
            ><i className="fa fa-search"></i></Button>
          </Col>
        </Row>
        <Col lg={12} id="results" className="m-auto d-flex justify-content-center w-100">
          <div className="col-12 my-2">
            {loading ? <Loading type="sm"/>:
              results.length < 1 ? <div className="text-center">No results</div>:
                <Row>
                  <Col lg={12}>
                    <Table className="m-0" responsive borderless hover>
                      <tbody id="lend-search-result">
                        {results.map( customer => {
                          const { id, name } = customer
                          return <tr key={id}>
                            <td className="text-capitalize h6 w-75">{name}</td>
                            <td className="w-25 text-right" >
                              <Button 
                                color="success" 
                                // block 
                                value={id}
                                className="btn-sm" 
                                onClick={(e) => handleLend(e.target.value)}
                              >Lend</Button></td>
                          </tr>})
                        }
                      </tbody> 
                    </Table>
                  </Col>
                  <div className="col-12 d-flex justify-content-center">
                    <Button 
                    color="dark"
                    className="btn-sm mx-auto mt-2"
                    onClick={loadMore}
                    disabled={buttonDisabled}
                    > {spinner ? <Spinner className="mx-3" style={{height: '1rem', width: '1rem'}} color="light"/> : <i className="cui-chevron-bottom mx-3"></i>} </Button>
                  </div>
                </Row>
            }
          </div>
        </Col>
      </ModalBody>
    </Modal>
  )
}
