import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateUser from './CreateUser'
import Loading from '../components/Loading'
import axios from 'axios'
import { 
  Badge, 
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Row, 
  Table, 
  Button 
} from 'reactstrap';

function UserRow(props) {
  const {
    user,
    toggleEdit,
  } = props
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}  >
      <td scope="row" style={{width: '10rem'}} ><img style={{height: '5rem', minWidth: '9rem'}} className="col-lg-12" src={`/storage/photo/${user.profile_pic}`} /></td>
      <td className="text-capitalize"><Link to={userLink}>{user.name}</Link></td>
      <td>{user.email}</td>
      <td className="text-capitalize">{user.library.name}</td>
      <td><Link to={userLink}><Badge color={getBadge('Active')}>{'Active'}</Badge></Link></td>
      <td className="btn-group-sm">
        <Button 
          className="btn-sm" 
          color="success"
          onClick={() => toggleEdit(null,user)}>
            <i className="fa fa-pencil"></i>Edit
        </Button>
        {/* <Button 
          className="btn-sm" 
          color="warning">
            <i className="fa fa-share"></i>Ban
        </Button>
        <Button 
          className="btn-sm" 
          color="danger">
            <i className="fa fa-trash"></i>Delete
        </Button> */}
      </td>
    </tr>
  )
}

class Users extends Component {

  constructor(){
    super()

    this.state = {
      users: [],
      create: false,
      loading: true,
      edit: null,
    }
  }

  getUsers = () => {
    this.setState({ loading: true })
    axios.get('/api/users')
    .then(response => {
      this.setState({
        users: response.data,
        loading: false
      })
    })
    .catch(error => console.log(error))
  }

  componentDidMount(){
    this.getUsers()
  }

  componentWillUnmount(){
    this.setState({
      users:[],
    })
  }

  toggleCreate = (event,user = null) => {
    user ? this.setState({
      create: !this.state.create,
      edit: user
    }):
    this.setState({
      create: !this.state.create,
      edit: null
    })
  }

  render() {
    const userList = this.state.users

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-users"></i> Users <small className="text-muted">List of all users</small>

                <Button color="primary" onClick={this.toggleCreate} className="btn-sm float-right">Create User</Button>
                <CreateUser 
                  create={this.state.create} 
                  edit={this.state.edit}
                  toggleCreate={this.toggleCreate} 
                  getUsers={this.getUsers}
                /> 
              </CardHeader>
              <CardBody>
                {this.state.loading ? <div className="d-flex justify-content-center"><Loading type="sm"/></div> :
                <Table responsive borderless hover>
                  <tbody>
                    {userList.map((user, index) =>
                        <UserRow key={index}
                          user={user}
                          toggleEdit={this.toggleCreate}
                        />
                      )}
                  </tbody>
                </Table>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
