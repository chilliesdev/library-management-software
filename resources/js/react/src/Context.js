import React, { Component } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

class AppProvider extends Component {

	constructor(props){
		super(props)

		this.state = {
			accessToken: localStorage.getItem('access_token') || sessionStorage.getItem('access_token') ||  null,
			user: [],
			name: '',
			profilePic: '',
			email: '',
			library: [],
		}
	}

	componentDidMount(){
		this.setUserInfo()
	}

	setUserInfo () {
		axios.get('/api/user',{
			headers: {
				'Authorization': `Bearer ${this.state.accessToken}`
			}
		})
			.then( response =>{ 
				this.setState({
					user: response.data,
					name: response.data.name,
					profilePic: response.data.profile_pic,
					email: response.data.email,
					library: response.data.library_id,
				})
			})
			.catch(error => {
				this.deleteToken()
				this.setState({
					accessToken: null
				})
			})
	}

	setToken = (token) => {
		this.setState({
			accessToken: token
		})
		this.setUserInfo()
	}

	deleteToken(){
		localStorage.removeItem('access_token')
		sessionStorage.removeItem('access_token')
	}

	logout = () => {
    axios.post('/api/logout',
    { },
    { 
      headers: {
        'Authorization': `Bearer ${this.state.accessToken}`
      } 
    })
    .then(response => {
			this.deleteToken()
			this.setState({accessToken: null})
    })
    .catch( error => {
			this.deleteToken()
      console.log(error.response)
    })
  }

	render() {
		return (
			<AppContext.Provider
				value = {{
					...this.state,
					addToken: this.setToken,
					logout: this.logout
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		)
	}
}

const AppConsumer = AppContext.Consumer

export {AppProvider, AppConsumer, AppContext}
