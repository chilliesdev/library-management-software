import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import axios from 'axios'
import { 
	Card, 
	CardBody, 
	CardHeader, 
	Col, 
	Row, 
	Table, 
	Button,
	Spinner
} from 'reactstrap'
import CreateCustomer from './CreateCustomer'

function CustomerRow(props) {
	const {
		customer,
	} = props

	const {
		id,
		name,
		phone,
	} = customer
	const customerLink = `/customers/${id}`
	return (
		<tr>
			<td scope="row" className="text-capitalize w-75"><Link to={customerLink}>{name}</Link></td>
			<td className="text-capitalize">{phone}</td>
		</tr>
	)
}


export default class Customers extends Component {
	constructor(){
		super()

		this.state = {
			customers: [],
			loading: true,
			url: '/api/customers',
			spinner: false,
			disabled: false,
			create: false,
		}
	}

	getData = (dataUrl,type = null) => {
		type === 'RELOAD' && this.setState({ loading: true})
		axios.get(dataUrl)
		.then(response => {
			this.setState({
				url: response.data.next_page_url,
				disabled: response.data.current_page === response.data.last_page && true,
				loading: false,
				spinner: false,
			})

			if (type === 'RELOAD' ) {
				this.setState({
					customers: response.data.data
				})
			} else {
				this.setState({
					customers: this.state.customers.length > 0 ? this.state.customers.concat(response.data.data): response.data.data,
				})
			}
			this.makePagination(response.data)
		})
		.catch(error => {
			this.getCustomers()
			console.log(error.response)
		})
	}

	getCustomers = () => {
		this.getData(this.state.url)
	}

	loadMore() {
		this.setState({
			url: this.state.pagination.next_page_url,
			spinner: true
		})
		this.state.pagination.current_page != this.state.pagination.last_page && this.getCustomers()
	}

	makePagination(data){
		this.setState({
			pagination: {
				current_page: data.current_page,
				last_page: data.last_page,
				next_page_url: data.next_page_url,
				prev_page_url: data.prev_page_url,
			}
		})
	}

	toggleCreate = () => {
		this.setState({
			create: !this.state.create,
		})
	}
	
	componentDidMount(){
		this.getCustomers()
	}

	render() {
		const {
			customers,
			loading,
			create,
			spinner,
			disabled,
		} = this.state

		return (
			<div className="animated fadeIn">
				<Row>
					<Col xl={12}>
						<Card>
							<CardHeader>
								<i className="fa fa-user"></i>Customers <small className="text-muted">All Customers</small>
								<Button
									className="btn-sm float-right"
									color="primary"
									onClick={() => this.toggleCreate()}
								>Add Customer</Button>
								<CreateCustomer 
									create={create} 
									toggleCreate={this.toggleCreate} 
									getData={this.getData}
								/>
							</CardHeader>
							<CardBody>
								{loading ? <div className="d-flex justify-content-center mb-4"><Loading type="sm"/></div> :
									<Table responsive borderless hover>
										<tbody>
											{customers.map(customer => 
												<CustomerRow 
													key={customer.id} 
													customer={customer}
												/>
											)}
										</tbody>
									</Table>
								}
								<div className="d-flex justify-content-center">
									<Button
										color="dark"
										disabled={disabled}
										onClick={this.loadMore.bind(this)}
									>
										{ spinner ? <Spinner className="mx-3" style={{height: '1rem', width: '1rem'}} color="light"/> : <i className="cui-chevron-bottom mx-3"></i>}
									</Button>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				
			</div>
		)
	}
}
