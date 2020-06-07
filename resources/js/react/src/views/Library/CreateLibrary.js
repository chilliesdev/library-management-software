import React, { useState, useEffect } from 'react'
import Alerts from '../components/Alerts'
import Loading from '../components/Loading'
import axios from 'axios'
import {
	Button, 
	Modal, 
	ModalBody, 
	ModalFooter, 
	ModalHeader,
	Form, 
	Input, 
	InputGroup, 
	InputGroupAddon, 
	InputGroupText,
	FormText,
} from 'reactstrap'

export default function CreateLibrary(props) {
	const { 
		create,
		toggleCreate,
		getLibraries,
		editInfo,
	} = props
	
	const [info,setInfo ] = useState({
		name: '',
		address: '',
		phone: '',
		picture: null,
	})
	
	const setEditInfo = () => {
		setInfo({
			name: editInfo.name,
			address: editInfo.address,
			phone: editInfo.phone,
			picture: null,
		})
	}

	const [errors,setErrors] = useState([])
	const [loading,setLoading] = useState(false)
	const [action,setAction] = useState({
		name: 'Create',
		url: 'addlibrary',
		color: 'primary'
	})
	
	useEffect(() => {
		if (editInfo) {
			setEditInfo()
			setAction({
				name: 'Edit',
				url: `editlibrary/${editInfo.id}`,
				color: 'success'
			})
		}
		else{
			setInfo({
				name: '',
				address: '',
				phone: '',
				picture: null,
			})
			setAction({
				name: 'Create',
				url: 'addlibrary',
				color: 'primary'
			})
		}
	},[editInfo])

	const {
		name,
		address,
		phone,
		picture
	} = info

	const validate = () => {
		if (name.length < 4){
			setErrors(['Library name must be atlest four characters long'])
			return false
		}
		
		if (address.length < 4){
			setErrors(['Library address must be atlest four characters long'])
			return false
		}
		
		if (phone.length < 4){
			setErrors(['Library phone must be atlest four characters long'])
			return false
		}

		if(action.name === 'Create'){

			if (picture === ''){
				setErrors(['Please insert and image'])
			} else {
				if (!picture.name.match(/\.(jpg|jpeg|png|gif)$/)){
					setErrors(['Photo only allows file types of GIF, PNG, JPG, JPEG and BMP.'])
					return false
				}
			}
		}

		setErrors([])
		return true
	}

	const handleCreate = () => {
		if (
			name === '' ||
			address === '' ||
			phone === '' ||
			(action.name === 'Create' && picture === null)
		){
			setErrors(['Please complete all fields.'])
			return
		}

		if (!validate()){
			return
		}

		setLoading(true)
		const formData = new FormData()
		const data = {
			name: name,
			address: address,
			phone: phone,
			picture: picture,
		}

		for (let key in data){
			formData.append(key,data[key])
		}
		// for (let val of formData.values()){
		// 	console.log(val)
		// }
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}

		axios.post(`/api/${action.url}`,formData,config)
			.then(response => {
				setLoading(false)
				toggleCreate()
				getLibraries()
			})
			.catch(error => {
				setLoading(false)
				console.log(error.response)
			})
	}

	return (
		<Modal
			isOpen={create}
			toggle={toggleCreate}
			className={`modal-${action.color} modal-lg`}
		>
			{loading && <Loading/>}
			<ModalHeader toggle={toggleCreate}>{action.name} Library</ModalHeader>
			<ModalBody>
				<Form>
					{ errors && <Alerts message={errors} variant="danger"/> }
					<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-building"></i>
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
								<i className="fa fa-institution"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="text" 
							placeholder="Address" 
							autoComplete="address"
							name="address"
							value={address || ''}
							onChange={e => {
								setInfo({...info,address: e.target.value})
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
							type="text" 
							placeholder="Phone" 
							autoComplete="phone"
							name="phone"
							value={phone || ''}
							onChange={e => {
								setInfo({...info,phone: e.target.value})
							}}
						/>
					</InputGroup>
					<InputGroup className="mb-4">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-picture-o"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="file" 
							name="picture"
							onChange={
								e => { 
									setInfo({...info,picture: e.target.files[0]})
								}
							}
						/>
						<FormText color="muted">
						Library picture
						</FormText>
						
					</InputGroup>
				</Form>

			</ModalBody>
			<ModalFooter>
				<Button color={action.color} onClick={handleCreate}>{action.name}</Button>{' '}
				<Button color="secondary" onClick={toggleCreate}>Cancel</Button>
			</ModalFooter>
		</Modal>
	)
}
