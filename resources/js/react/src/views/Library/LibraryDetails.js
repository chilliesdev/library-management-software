import React, {useState} from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import {
	Row,
	Col,
	Button, 
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
} from 'reactstrap'

export default function LibraryDetails(props) {
	const {
		libraryDetails,
		details,
		toggleEdit,
		toggleDetails,
		getLibraries,
	} = props

	const {
		id,
		name,
		address,
		phone,
		picture,
	} = libraryDetails

	const [deleteValue,setDeleteValue] = useState(false)
	const [loading,setLoading] = useState(false)

	const toggleDelete = () => {
		setDeleteValue(!deleteValue)
	}

	const handleDelete = () => {
		setLoading(true)
		axios.post(`/api/deletelibrary/${id}`)
			.then(response => {
				setLoading(false)
				toggleDelete()
				toggleDetails()
				getLibraries()
			})
			.catch(error => {
				console.error(error.response)
			})
	}

	 const manageEdit = () => {
		 toggleDetails()
		 toggleEdit(id)
	 }

	const heading = {
		'minHeight': '100%',
		'background': `url(/storage/library_cover/${picture}) rgba(0,0,0,0.3)`,
		'backgroundSize': 'cover',
		'backgroundBlendMode': 'multiply',
		'height': '40vh',
		'color': 'white',
	}

	return (
		<Modal
			isOpen={details}
			toggle={toggleDetails}
			className='modal-dark modal-lg'
		>
			<ModalHeader className="text-capitalize" style={heading} toggle={toggleDetails}>{name}</ModalHeader>
			<ModalBody>
				<Row className="float-right mr-4">
					<Button 
						className="m-1 ml-4 btn-sm" 
						color="success"
						onClick={() => manageEdit()}
					>Edit</Button>
					<Button 
						className="m-1 btn-sm" 
						color="danger"
						onClick={() => toggleDelete()}
					>Delete</Button>
					<Modal
						isOpen={deleteValue}
						toggle={toggleDelete}
						className="modal-danger modal-sm"
					>
						{loading && <Loading/>}
						<ModalHeader><small>Do you want to delete this library?</small></ModalHeader>
						<ModalFooter>
							<Button className="btn-sm" color="danger" onClick={handleDelete}>Yes</Button>
							<Button className="btn-sm" color="success" onClick={toggleDelete}>No</Button>
						</ModalFooter>
					</Modal>
				</Row>
				<Row>
					<Col lg={12} className="mt-5">
						<i className="fa fa-institution fa-lg mr-2"></i>
						<span className="text-capitalize lead">{address}</span>
					</Col>
					<br/>
					<Col lg={12} className="mt-2">
						<i className="fa fa-phone fa-lg mr-2"></i>
						<span className="h6">{phone}</span>
					</Col>
				</Row>
			</ModalBody>
		</Modal>
	)
}
