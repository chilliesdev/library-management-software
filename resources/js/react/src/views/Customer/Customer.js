import React, { Component } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import Toasts from '../components/Toasts'
import { Redirect, Link } from 'react-router-dom'
import CreateCustomer from './CreateCustomer'
import CustomerBooks from './CustomerBooks'
import {
	Row, 
	Col, 
	Button,
	Modal,
	ModalHeader,
	ModalFooter,
} from 'reactstrap'

export default class Customer extends Component {
	constructor(props){
		super(props)

		this.state = {
			slug: this.props.match.params.id,
			customer: [],
			loading: true,
			deleteVal: false,
			redirect: false,
			edit: false,
			toast: false,
		}
	}

	toggleToast () {
		this.setState({
			toast: !this.state.toast
		})

		setTimeout(() => 
			this.setState({
				toast: false
			})
		,5000)
	}

	toggleDelete = () => {
		this.setState({
			deleteVal: !this.state.deleteVal
		})
	}

	toggleEdit = () => {
		this.setState({
			edit: !this.state.edit
		})
	}

	handleDelete = () => {
		this.setState({
			loading: true
		})
		axios.post(`/api/deletecustomer/${this.state.slug}`)
			.then(response => {
				console.log(response)
				this.setState({
					// loading: false,
					redirect: true,
				})
				this.toggleDelete()
			})
			.catch(error => {
				console.error(error)
			})
	}
	
	getCustomer = () => {
		this.setState({
			loading: true,
		})
		axios.get(`/api/customer/${this.state.slug}`)
			.then(response => {
				this.setState({
					customer: response.data,
					loading: false,
				})
			})
			.catch(error => {
				this.getCustomer()
				console.error(error.response)
			})
	}

	componentDidMount(){
		this.getCustomer()
	}

	render() {
		const {
			loading,
			customer,
			deleteVal,
			redirect,
			edit,
			toast,
		} = this.state

		return (
			<div className="animated fadeIn">
				{redirect && <Redirect to="/customers"/>}
				{loading ? <Loading/> :
					<>
					{toast && <Toasts message="Book has been returned successfully" title="Success" />}
					<Row>
						<Col xl={12}>
							<Link className="btn btn-dark float-right" to='/customers'>Go Back</Link>
						</Col>
						<Col xl={12}>
							<div className="display-4 text-capitalize"><i className="fa fa-user pr-1"></i>{customer.name}</div>
						</Col>
						<Col xl={12}>
							<div className="lead"><i className="fa fa-phone pr-1"></i>{customer.phone}</div>
						</Col>
						<Col lg={6} className="mt-5">
							<Button 
								className="btn-sm mx-1" 
								color="danger" 
								onClick={this.toggleDelete}
							><i className="fa fa-trash"></i>Delete
							</Button>
							<Button 
								className="btn-sm mx-1"
								color="success"
								onClick={this.toggleEdit}
							><i className="fa fa-pencil"></i>Edit
							</Button>
							<Button 
								className="btn-sm mx-1" 
								color="secondary"
							><i className="fa fa-envelope"></i>Message
							</Button>
						</Col>
						<Col lg={6}>
							<CustomerBooks 
								customer={customer.id}
								toggleToast={this.toggleToast}
								toggleLoading={(value) => this.setState({ loading: value })}
							/>
						</Col>
	{/* Delete Customer */}
						<Modal
							isOpen={deleteVal}
							toggle={this.toggleDelete}
							className="modal-danger modal-sm"
						>
							<ModalHeader>
								<div className="lead">Do you want to delete this customer?</div>
							</ModalHeader>
							<ModalFooter>
								<Button className="btn-sm" color="danger" onClick={this.handleDelete}>Yes</Button>
								<Button className="btn-sm" color="success" onClick={this.toggleDelete}>No</Button>
							</ModalFooter>
						</Modal>
	{/* Edit Customer */}
						<CreateCustomer
							editInfo={customer}
							create={edit}
							getCustomers={this.getCustomer}
							toggleCreate={this.toggleEdit}
						/>
					</Row>
				</>}
			</div>
		)
	}
}