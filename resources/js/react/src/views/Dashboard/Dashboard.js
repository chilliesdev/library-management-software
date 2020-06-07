import React, { useState, useContext } from 'react'
import { AppContext } from '../../Context'
import BookRecommendation from '../Books/BookRecommendation'
import Loading from '../components/Loading'
import Toasts from '../components/Toasts'
import LendList from '../Books/LendList'
import { 
	Row, 
	Col,
	Card,
	CardHeader,
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle, 
	Button
} from 'reactstrap'

export default function Dashboard() {
  const context = useContext(AppContext)

  const [ toast, setToast ] = useState(false)
  const [ loading,setLoading ] = useState(false)
  const [ toastMessage, setToastMessage ] = useState('')
  const [ toastTitle, setToatTitle ] = useState('')

  function toggleToast (message = null, title = null) {
    setToast(!toast)
    setToastMessage(message)
    setToatTitle(title)

		setTimeout(() =>
      setToast(false)
		,5000)
	}

  return (
    <div className="animated fadeIn">
      { toast && <Toasts message={toastMessage} title="Success"/> }
      { loading && <Loading /> }
      <Row>
        <Col lg={8}>
          <Card>
            <CardBody className="px-0 mx-n2">
              <BookRecommendation
                dataUrl="bookpopular"
                getBook={null}
                title="Most Popular"
              />
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
          <LendList 
            dataUrl={`booklends/${context.library}`}
            dataPost={null}
            toggleToast={toggleToast}
            toggleLoading={(value) => setLoading(value)}
          />
        </Col>
        <Col lg={8}>
          <Card>
            <CardBody className="px-0 mx-n2">
              <BookRecommendation
                dataUrl="booknewest"
                getBook={null}
                title="Latest"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
