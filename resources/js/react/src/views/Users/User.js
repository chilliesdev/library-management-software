import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios'
import Loading from '../components/Loading';

class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      slug: this.props.match.params.id,
      userInfo: [],
      library: '',
      loading: true,
    }
  }

  getUserInfo = () => {
    axios.get(`/api/user/${this.state.slug}`)
      .then( response => {
        console.log(response.data)
        this.setState({ 
          userInfo: response.data,
          library: response.data.library.name,
          loading: false,
        })
      })
      .catch(error =>{ 
        this.getUserInfo()
        console.log(error.response)
      })
  }

  componentDidMount(){
    this.getUserInfo()
  }

  render() {
    const {
      userInfo,
      loading,
      library,
    } = this.state

    const {
      name,
      email,
    } = userInfo

    return (
      <div className="animated fadeIn">
        {loading && <Loading/>}
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      <tr>
                        <td>Name:</td><td>{name}</td>
                      </tr>
                      <tr>
                        <td>Email:</td><td>{email}</td>
                      </tr>
                      <tr>
                        <td>Library:</td><td>{library}</td>
                      </tr>
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
