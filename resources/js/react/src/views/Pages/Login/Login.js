import React, { Component } from 'react';
import axios from 'axios'
import { AppContext } from '../../../Context'
import Loading from '../../components/Loading'
import Alerts from '../../components/Alerts'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { 
  Button,
  Card, 
  CardBody, 
  CardGroup, 
  Col, 
  Container, 
  Row, 
  Form, 
  FormGroup,
  Input, 
  Label, 
  InputGroup, 
  InputGroupAddon, 
  InputGroupText
} from 'reactstrap';


class Login extends Component {
  static contextType = AppContext
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      remember: false,
      errors: [],
      token: '',
      loading: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheck = (e) => {
    this.setState({
      remember: !this.state.remember
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.email == '' || this.state.password == ''){
      this.setState({
        errors: ['Please insert a valid email and password']
      })

      return
    }

    this.setState({
      errors: [],
      loading: true,
    })

    axios.post('/api/login',{
      username: this.state.email,
      password: this.state.password
    })
      .then( response => {           
        if(response.data == 400 || response.data == 401){
          this.setState({
            loading: false,
            errors: ['Your credentials are incorrect. Please try again']
          })
        }else{
          this.setState({
            loading: false,
            token: response.data.access_token,
          })
          this.handleLogin()
        }
      })
      .catch(error => {
        this.setState({
          loading: false,
        })
        console.error(error.response)
      })
  }

  handleLogin = () => {
    this.state.remember ? localStorage.setItem('access_token',this.state.token) : sessionStorage.setItem('access_token',this.state.token)
    const { addToken } = this.context

    addToken(this.state.token)
  }

  render() {
    const {
      email,
      password,
      remember,
      loading,
      errors,
    } = this.state

    const {
      accessToken
    } = this.context

    if(accessToken) {
      return <Redirect to='/'/>
    }

    const coverStyle = {
      background: `url(/storage/backgrounds/img-bg2.jpg) rgba(0,0,0,0.6)`,
      backgroundSize: 'cover',
      backgroundBlendMode: 'multiply',
      color: 'white',
    }

    return (
      <div className="app flex-row align-items-center">
        {loading && <Loading/>}
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="11" sm="12" xs="12">
              <CardGroup>
                <Card className="p-4 shadow-lg">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      { errors && <Alerts message={errors} variant="danger"/> }
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-envelope-o"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          type="email" 
                          placeholder="Email" 
                          autoComplete="email"
                          name="email"
                          value={email}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          type="password" 
                          placeholder="Password" 
                          autoComplete="current-password" 
                          name="password"
                          value={password}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <FormGroup check className="mb-4">
                        <Label check>
                          <Input
                          addon
                          aria-label="keep me logged in"
                          type="checkbox" 
                          // className="form-check-input"
                          value={remember}
                          onChange={this.handleCheck}
                          />{' '}
                          Remember Me
                        </Label>
                      </FormGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" type="submit" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white shadow-lg d-sm-down-none py-5" style={coverStyle}>
                  <CardBody className="text-center">
                    <div>
                      {/* <h2>Sign up</h2> */}
                      <p className="h6">This library management software was designed to manage multiple large scale libraries on a single database. The software was designed as a single page application with the front-end fully developed with reactJs and the back-end with Laravel.</p>
                      {/* <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link> */}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
