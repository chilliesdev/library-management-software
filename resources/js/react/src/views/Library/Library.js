import React, { Component, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import CreateLibrary from './CreateLibrary'
import LibraryDetails from './LibraryDetails'
import { 
	Row, 
	Col,
	Card,
	CardHeader,
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle, 
	Button,
	Input,
	InputGroup,
	InputGroupAddon,
} from 'reactstrap'

function LibraryCard(props){
	const {
		libraryDetails,
		toggleDetails,
		} = props

	const {
		id,
		name,
		address,
		phone,
		picture,
	} = libraryDetails

	return (
		<Col lg={3} md={4} sm={6} xs={8}>
      <Card style={{ height: '25rem' }}>
        <CardImg top width="100%" src={`/storage/library_cover/${picture}`} alt={name} />
        <CardBody className="d-flex flex-column">
					<CardTitle className="font-weight-bolder  h5 text-capitalize">{name}</CardTitle>
					<CardText className="text-capitalize overflow-hidden lead"><mark>{address}</mark></CardText>
					<CardSubtitle className="pb-1"><small>{phone}</small></CardSubtitle>
					<Button color="primary" className="mt-auto" onClick={() => toggleDetails(id)} >More</Button>
					</CardBody>
      </Card>
    </Col>
	)
}

export default class Library extends Component {
	constructor(){
		super()

		this.state = {
			libraries: [],
			loading: false,
			search: '',
			searchResult: [],
			create: false,
			details: false,
			detailsInfo: null,
			editInfo: null,
		}
	}

	getLibraries = () => {
		this.setState({
			loading: true,
		})
		axios.get('/api/library')
			.then( response => {
				this.setState({
					libraries: response.data,
					loading: false
				})
			})
			.catch(error => setInterval(() => this.getLibraries(),5000))
	}

	searchLibrary = (e) => {
		this.setState({
			search: e.target.value
		})

		const { search, libraries } = this.state

		if (search != ''){
			let tempLibraries = libraries.filter( (libraries) => 
				libraries.name.toLowerCase().includes(search)
			)

			return this.setState({
				searchResult: tempLibraries
			})
		}
	}

	toggleCreate = (id) => {
		this.setState({
			create: !this.state.create,
		})
		id != null ? this.setState({ editInfo: this.state.detailsInfo }) : this.setState({ editInfo: null })
	}

	toggleDetails = (id) => {
		let tempLibrary = this.state.libraries.filter(library => library.id === id)
		this.setState({
			details: !this.state.details,
			detailsInfo: tempLibrary[0],
		})
	}

	componentDidMount(){
		this.getLibraries()
	}

	render() {
		const {
			libraries,
			loading,
			search,
			searchResult,
			create,
			details,
			detailsInfo,
			editInfo,
		} = this.state

		return (
			<div className="animated fadeIn">
				{detailsInfo && <LibraryDetails 
					libraryDetails={detailsInfo}
					details={details}
					toggleEdit={this.toggleCreate}
					toggleDetails={this.toggleDetails}
					getLibraries={this.getLibraries}
				/>}
				<Row>
					<Col xl={12}>
						<Card>
							<CardHeader>
								<Row className="d-flex justify-content-between">
									<span className="col-2">
										<Button className="btn-sm" color="primary" onClick={this.toggleCreate}>Add Library</Button>
									</span>
									<Input
										className="col-5 mr-3"
										type="search"
										placeholder="Search..."
										value={search}
										onChange={this.searchLibrary}
									/>
								</Row>
							<CreateLibrary
								create={create}
								toggleCreate={this.toggleCreate}
								editInfo={editInfo}
								getLibraries={this.getLibraries}
							/>
							</CardHeader>
							<CardBody>
								<Row>
									{loading ? 
										<Col xl="12" className="d-flex justify-content-center">
											<Loading type="sm"/>
										</Col> :  (search != '' && searchResult.length === 0)?
											<Col xl="12" className="d-flex justify-content-center">
												<strong>No libray match your search</strong>
											</Col> : (search != '' && searchResult.length > 0) ? searchResult.map( library => 
												<LibraryCard
													key={library.id}
													libraryDetails={library}
													details={details}
													toggleDetails={this.toggleDetails}
													getLibraries={this.getLibraries}
												/>
												):
												libraries.map( library => 
													<LibraryCard
														key={library.id}
														libraryDetails={library}
														details={details}
														toggleDetails={this.toggleDetails}
														getLibraries={this.getLibraries}
													/>
											)}
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
				
			</div>
		)
	}
}
