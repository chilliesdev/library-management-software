import React, { useState,useEffect } from 'react'
import Alerts from '../components/Alerts'
import Loading from '../components/Loading'
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

export default function CreateBooks(props) {
  const {
    toggleCreate,
    create,
    getData,
	} = props
	
  const [info,setInfo ] = useState({
		name: '',
    author: '',
    description: '',
		genre: 'GENRE1',
		rating: 1,
    library: [],
		cover: null,
  })
  const [libraryInfo,setLibraryInfo] = useState({})
  const [libraryList,setLibraryList] = useState([])

  const getLibraries = () => {
    axios.get('/api/library')
      .then(response => {
        setLibraryList(response.data)
        setInfo({...info, library: response.data[0].id})
      })
      .catch(error => {
        console.error(error)
        getLibraries()
      })
  }

  useEffect(() => {
		getLibraries()
		
		return () => {
			setInfo({
				...info,
				name: '',
				author: '',
				description: '',
				genre: 'GENRE1',
				rating: 1,
				cover: null,
			})
		}
  },[])

	const [errors,setErrors] = useState([])
	const [loading,setLoading] = useState(false)

  const {
		name,
		author,
		description,
		genre,
    rating,
    library,
		cover,
	} = info

	function addLibraryInfo(e){
		e.preventDefault()
		let includedLibrary = libraryList.filter( data => 
			data.id == [e.target.name]
		)
		setLibraryInfo({
			...libraryInfo,
			[e.target.name]: {
				id: includedLibrary[0].id,
				name: includedLibrary[0].name,
				quantity: 0,
			}
		})
	}
	
	function removeLibraryInfo(e,id){
		e.preventDefault()
		Object.filter = (obj,predicate) => Object.fromEntries(Object.entries(obj).filter(predicate))
		let filteredLibraryInfo = Object.filter(libraryInfo, ([name, libraryInfo]) => libraryInfo.id != id)
		setLibraryInfo(filteredLibraryInfo)
	}
  
  const validate = () => {
		if (name.length < 1){
			setErrors(['Book name must be atlest one character long'])
			return false
		}
		
		if (author.length < 4){
			setErrors(['Book address must be atlest 4 characters long'])
			return false
		}
		
		if (description.length < 4){
			setErrors(['Book descriptio must be atlest 4 characters long'])
			return false
		}
	
		if (description.length > 190){
			setErrors(['Book description must be less than 190 characters '])
			return false
		}

		for (let [key, value] of Object.entries(libraryInfo)){
			if(value.quantity < 1){
				setErrors([`${name} quantity of books must be atleast one`])
				return false
			}
		}		

    if (cover === ''){
      setErrors(['Please insert and image'])
    } else {
      if (!cover.name.match(/\.(jpg|jpeg|png|gif)$/)){
        setErrors(['Photo only allows file types of GIF, PNG, JPG, JPEG and BMP.'])
        return false
      }
    }

		setErrors([])
		return true
  }
  
  const handleCreate = () => {
    if (
      name === '' ||
      author === '' ||
      description === '' ||
			Object.keys(libraryInfo).length < 1 ||
      cover === null
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
			author: author,
			description: description,
			genre: genre,
			rating: rating,
			cover: cover
		}

		for (let key in data){
			formData.append(key,data[key])
		}

		for (let key in libraryInfo){
			formData.append(`library_id_${libraryInfo[key].id}`,libraryInfo[key].quantity)
		}
		// for (let val of formData.values()){
		// 	console.log(val)
		// }

    const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
    }
    
    axios.post('/api/addbook',formData,config)
			.then(response => {
				setLoading(false)
				setLibraryInfo([])
				setInfo({
					...info,
					name: '',
					author: '',
					description: '',
					genre: 'GENRE1',
					rating: 1,
					cover: null,
				})
				
				toggleCreate(true)
				getData('/api/books','RELOAD')
				
			})
			.catch(error => {
				setLoading(false)
				console.error(error.response)
			})
  }

  return (
    <Modal
      isOpen={create}
      toggle={toggleCreate}
      className="modal-primary modal-lg"
    >
			{loading && <Loading/>}
      <ModalHeader toggle={toggleCreate}>Add Book</ModalHeader>
      <ModalBody>
        <Form>
					{ errors && <Alerts message={errors} variant="danger"/> }
					<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-book"></i>
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
								<i className="fa fa-user-circle"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="text" 
							placeholder="Author" 
							autoComplete="author"
							name="author"
							value={author || ''}
							onChange={e => {
								setInfo({...info,author: e.target.value})
							}}
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-pencil"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="text" 
							placeholder="Description" 
							autoComplete="description"
							name="description"
							value={description || ''}
							onChange={e => {
								setInfo({...info,description: e.target.value})
							}}
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-podcast"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="select" 
							name="genre"
							onChange={e => {
								setInfo({...info,genre: e.target.value})
							}}
						>
              <option value="GENRE1">GENRE1</option>
              <option value="GENRE2">GENRE2</option>
              <option value="GENRE3">GENRE3</option>
              <option value="GENRE4">GENRE4</option>
              <option value="GENRE5">GENRE5</option>
              <option value="GENRE6">GENRE6</option>
            </Input>
					</InputGroup>
					<FormText color="muted">Add libraries</FormText>
					<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-building"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="select" 
							name="library"
							onChange={e => {
								setInfo({...info,library: e.target.value})
							}}
						>
              {libraryList.map(libraryData =>
								<option 
									className="text-capitalize"
                  key={libraryData.id} 
                  value={libraryData.id}
                >{libraryData.name}</option>
              )}
            </Input>
            <InputGroupAddon addonType="append">
							<Button
                color="success"
                name={info.library}
							  onClick={e => addLibraryInfo(e)}
              >Include
              </Button>
						</InputGroupAddon>
					</InputGroup>
					{Object.keys(libraryInfo).length > 0 && <FormText color="muted">Add number of books to selected libraries</FormText>}
					{Object.keys(libraryInfo).map((keyName, i) => {
            const {
              id,
              name,
              quantity,
              } = libraryInfo[keyName]
            
              return <InputGroup key={id} className="mb-3">
									<InputGroupAddon addonType="prepend">
										<InputGroupText className="text-capitalize">
											{name}
										</InputGroupText>
									</InputGroupAddon>
									<Input 
										type="number" 
										placeholder="Quantity" 
										name={id}
										value={quantity || 0}
										onChange={e => {
											setLibraryInfo({
												...libraryInfo,
												[id]: { id, name, quantity: e.target.value }
											})
										}}
									/>
									<InputGroupAddon addonType="append">
										<Button
											color="danger"
											name={info.library}
											onClick={(e) => removeLibraryInfo(e,id)}
										>Remove
										</Button>
									</InputGroupAddon>
								</InputGroup>
            }
          )}
					<InputGroup className="mb-3">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-star"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="select" 
							name="libraryInfo"
							onChange={e => {
								setInfo({...info,rating: e.target.value})
							}}
						>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Input>
					</InputGroup>
					<InputGroup className="mb-4">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-picture-o"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							type="file" 
							name="cover"
							onChange={
								e => { 
									setInfo({...info,cover: e.target.files[0]})
								}
							}
						/>
						<FormText color="muted">
						Book Cover
						</FormText>
					</InputGroup>
				</Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => handleCreate()}>Add</Button>
        <Button color="secondary" onClick={() => toggleCreate()}>Cancle</Button>
      </ModalFooter>
    </Modal>
  )
}