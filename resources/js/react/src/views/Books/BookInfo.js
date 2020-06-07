import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import {
  Button,
  Table,
  Card,
  CardText,
	CardBody,
	CardFooter,
  CardHeader,
  Badge,
} from 'reactstrap'

export default function BookInfo({ id }) {

  const [loading,setLoading] = useState(true)
  const [bookInfo,setBookInfo] = useState([])

  function getBookInfo(){
    axios.get(`/api/bookinfo/${id}`)
      .then(response => {
        setLoading(false)
        setBookInfo(response.data)
      })
      .catch(error => setTimeout( getBookInfo(), 5000))
  }

  useEffect(() => {
    getBookInfo()
  },[])

  return (
    <Card>
      <CardText className="h3 text-left ml-3 mt-2">Availabilty</CardText>
      <hr className="mx-2 my-1"/>
      <CardBody>
        {loading ? <Loading type="sm"/>:
          <Table responsive hover borderless>
            <tbody>
              {bookInfo.map(library =>
                <tr key={library.id}>
                  <td className="text-capitalize font-weight-bold w-75">{library.name}</td>
                  <td className="font-weight-light w-25" ><Badge pill color="warning">{library.pivot.quantity}</Badge></td>
                </tr>
              )}
            </tbody>
          </Table>
        }
      </CardBody>
    </Card>
  )
}
