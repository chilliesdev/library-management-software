import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import axios from 'axios'
import BookCard from './BookCard'
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardHeader, 
  Button, 
  Spinner 
} from 'reactstrap'

export default function BookRecommendation({ dataUrl, getBook , title }) {

  const [ recommendations, setRecommendations ] = useState([])
  const [loading,setLoading] = useState(true)
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
    pagination.current_page != pagination.last_page && getRecommendation(true)
  }

  function getRecommendation ( getMore = false) {
    getMore && setSpinner(true)

    function onGet (response) {
      getMore ? setSpinner(false) : setLoading(false)
      setRecommendations( recommendations.length > 0 ? recommendations.concat(response.data.data) : response.data.data)
      setUrl(response.data.next_page_url)
      setButtonDisabled( response.data.current_page === response.data.last_page ? true : false)
      makePagination(response.data)
    }

    axios.get(url)
    .then(response => onGet(response))
    .catch(error => setTimeout(() => getRecommendation() ,5000))

  }

  useEffect(() => 
    getRecommendation()
  ,[])

  return (
    <div className="container-fluid">
      { !loading && <Col lg={12}>
        <div className="d-flex justify-content-start"><h4>{title}</h4></div>
      </Col>}
      <Row 
        className={loading ? 'd-flex justify-content-center' : 'flex-row flex-nowrap text-center'} 
        id={!loading ? "side-scroll" : undefined}
      >
        {loading ? <Col className="mt-5"><Loading type="sm"/></Col> :
        <>
          { recommendations.map( book => 
              <BookCard key={book.id} book={book} getBook={getBook} customClassName="col-lg-4 col-md-12 col-sm-12"/>
            )
          }
          <div className="col-1 d-flex align-items-center">
            <Button 
              color="dark"
              style={{height: '3rem', width: '2rem'}}
              onClick={loadMore}
              disabled={buttonDisabled}
              className="py-1 btn-sm">
              { spinner ? <Spinner style={{height: '1rem', width: '1rem'}} color="light"/> : <i className="cui-chevron-right"></i>}
            </Button>
          </div>
        </>}
      </Row>
    </div>
  )
}