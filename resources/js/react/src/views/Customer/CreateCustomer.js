import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Alerts from '../components/Alerts'
import axios from 'axios'
import { 
	Button,
	Modal, 
	ModalHeader, 
	ModalFooter, 
	ModalBody, 
	Form, 
	Input,  
	InputGroup, 
	InputGroupAddon, 
	InputGroupText,
	FormText,
} from 'reactstrap'


export default function CreateCustomer({
	create,
	toggleCreate,
	editInfo,
	getData = null,
	handleLend = null,
}) {
	
	const [info,setInfo] = useState({
		name: '',
		phone: '',
	})

	const {
		name,
		phone,
	} = info
	const [loading,setLoading] = useState(false)
	const [errors,setErrors] = useState([])

	const setEditInfo = () => {
		setInfo({
			name: editInfo.name,
			phone: editInfo.phone,
		})
	}

	const [action,setAction] = useState({
		name: 'Create',
		url: 'addlibrary',
		color: 'primary',
	})

	useEffect(() => {
		if (editInfo) {
			setEditInfo()
			setAction({
				name: 'Edit',
				url: `editcustomer/${editInfo.id}`,
				color: 'success'
			})
		} 
		else {
			setInfo({
				name: '',
				phone: '',
			})
			setAction({
				name: 'Create',
				url: 'addcustomer',
				color: 'primary'
			})
		}

		return () => {
			setInfo({
				name: '',
				phone: '',
			})
		}
	},[editInfo])

	const validate = () => {
		if (name.length < 4){
			setErrors(['Name must be atlest four characters long'])
			return false
		}
		
		if (phone.length < 11 || !Number.isInteger(Number(phone))){
			setErrors(['Add a valid phone'])
			return false
		}

		setErrors([])
		return true
	}

	const handleCreate = () => {
		if (
			name === '' ||
			phone === ''
			){
			setErrors(['Please fill all fields.'])
			return 
		}

		if (!validate()){
			return
		}

		setLoading(true)
		axios.post(`/api/${action.url}`,{
			name: name,
			phone: phone
		})
			.then(response => {
				setLoading(false)
				setInfo({
					name: '',
					phone: '',
				})
				toggleCreate()
				handleLend ? handleLend(response.data.id) : getData('/api/customers','RELOAD')
			})
			.catch(error => {
				console.error(error)
			})
	}

	return (
		<Modal
			isOpen={create}
			toggle={toggleCreate}
			className={`modal-${action.color}`}
		>
			{loading && <Loading/>}
			<ModalHeader toggle={toggleCreate}>{action.name} Customer</ModalHeader>
			<ModalBody>
				<Form>
					{ errors && <Alerts message={errors} variant="danger"/> }
					<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-user"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="name" 
							placeholder="Name" 
							autoComplete="Name"
							name="name"
							value={name || ''}
							onChange={e => {
								setInfo({...info,name: e.target.value})
							}}
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-phone"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="number" 
							placeholder="Phone" 
							autoComplete="phone"
							name="phone"
							value={phone || ''}
							onChange={e => {
								setInfo({...info,phone: e.target.value})
							}}
						/>
					</InputGroup>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button color={`${action.color}`} onClick={() => handleCreate()}>{action.name}</Button>
				<Button color="secondary" onClick={() => toggleCreate()}>Cancle</Button>
			</ModalFooter>
		</Modal>
	)
}
