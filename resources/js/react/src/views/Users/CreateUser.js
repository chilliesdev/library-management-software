import React, { useState,useEffect } from 'react'
import Alerts from '../components/Alerts'
import axios from 'axios'
import Loading from '../components/Loading'
import { 
	Button, 
	Modal, 
	ModalBody, 
	ModalFooter, 
	ModalHeader,
	Form, 
	Input, 
	// Label, 
	InputGroup, 
	InputGroupAddon, 
	InputGroupText,
	FormText,
} from 'reactstrap';

export default function CreateUser(props) {
	const {
		create, 
		edit,
		toggleCreate, 
		getUsers
	} = props

	const [info, setInfo] = useState({
		name: '',
		email: '',
		library: '',
		password: '',
		confirmPassword: '',
		profilePic: null,
	})
	const [libraries,setLibraries] = useState([])
	const [errors, setErrors] = useState('')
	const [loading, setLoading] = useState(false)
	const [action, setAction] = useState([])

	function toggleAction (){
		if (edit){
			setAction({
				name: 'Edit',
				url: `/api/edituser/${edit.id}`,
				color: 'success'
			})
			setInfo({
				name: edit.name,
				email: edit.email,
				library: edit.library.id,
			})
		} else {
			setAction({
				name: 'Create',
				url: '/api/adduser',
				color: 'primary'
			})
			setInfo({
				name: '',
				email: '',
				library: '',
			})
		}
	}

	function getLibraries() {
		axios.get('/api/library')
			.then( response => {
				setLibraries(response.data)
			})
			.catch( error => setTimeout(() => getLibraries(),5000))
	}

	useEffect( () => {
		toggleAction()
		getLibraries()
	}
	,[edit])

	const { 
		name,
		email,
		library,
		password,
		confirmPassword,
		profilePic,
	 } = info

	const validate = () => {
		if (name.length < 4){
			setErrors(['Name must be atlest four characters long'])
			return false
		}
		
		const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		if (!email.match(emailFormat)){
			setErrors(['Not a valid email'])
			return false
		}

		function validatePassword(){
			if (password.length < 8){
				setErrors(["Password must be atlest eigth characters long"])
				return false
			}else if ( password !== confirmPassword){
				setErrors(["Passwords don't match!"])
				return false
			}
			return true
		}

		if (action.name === 'Create' || typeof password != 'undefined' || typeof confirmPassword != 'undefined'){ 
			return validatePassword()
		}

		function validateImage(){
			if (!profilePic.name.match(/\.(jpg|jpeg|png|gif)$/) ){
				setErrors(['Photo only allows file types of GIF, PNG, JPG, JPEG and BMP.'])
				return false
			}
			return true
		}

		if (profilePic){
			return validateImage()
		}else if(action.name == 'Create'){
			setErrors(['Please insert and image'])
			return false
		}

		setErrors([])
		return true
	}

	const handleCreate = () => {
		if( action.name === 'Create' && 
			(name === '' || 
			email === '' ||
			password === '' ||
			confirmPassword === '' ||
			profilePic === null)
		){
			return setErrors(['Please fill all fields.'])
		} else if (  action.name === 'Edit' && 
			(name === '' || 
			email === '' )
		){
			return setErrors(['Please fill all fields.'])
		}

		if (!validate()) {
			return
		}
		
		setErrors([])
		setLoading(true)
		const formData = new FormData()
		const data = {
			name: name,
			email: email,
			library: library,
			profilePic: profilePic,
		}
		for (let key in data){
			formData.append(key,data[key])
		}
		password && formData.append('password',password)

		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}

		axios.post(action.url,formData,config)
			.then(response => {
				if (response.data.success === false) {
					setErrors(['Image not supported'])
					setLoading(false)
				} else {
					setLoading(false)
					toggleCreate()
					getUsers()
				}
				
			})
			.catch(error => {
				console.log(error.response)
				setLoading(false)
			})
	}

	return (
		<Modal 
				isOpen={create} 
				toggle={toggleCreate}
				className={`modal-${action.color} modal-lg`}>
			{loading && <Loading/>}
			<ModalHeader toggle={toggleCreate}>{action.name} User</ModalHeader>
			<ModalBody>
			<Form>
				{ errors && <Alerts message={errors} variant="danger"/> }
				<InputGroup className="mb-3">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="icon-user"></i>
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
							<i className="cui-envelope-closed"></i>
						</InputGroupText>
					</InputGroupAddon>
					<Input 
						type="email" 
						placeholder="Email" 
						autoComplete="email"
						name="email"
						value={email || ''}
						onChange={e => {
							setInfo({...info,email: e.target.value})
						}}
					/>
				</InputGroup>
				<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-building"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="select" 
							name="libraryInfo"
							defaultValue={library}
							onChange={e => {
								setInfo({...info,[info.library]: e.target.value})
							}}
						>
              {libraries.map( library =>
								<option key={library.id} value={library.id}>{library.name.toUpperCase()}</option>
							)}
            </Input>
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
						value={password || ''}
						onChange={e => {
							setInfo({...info,password: e.target.value})
						}}
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
						placeholder="Confirm Password" 
						autoComplete="confirm-password" 
						name="confirmPassword"
						value={confirmPassword || ''}
						onChange={
							e => { 
								setInfo({...info,confirmPassword: e.target.value})
							}
						}
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
						name="profilePicture"
						onChange={
							e => { 
								setInfo({...info,profilePic: e.target.files[0]})
							}
						}
					/>
					<FormText color="muted">User profile picture</FormText>
					
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
