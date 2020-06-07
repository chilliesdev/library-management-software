import React, { Component } from 'react'
import { AppContext } from '../../Context'
import axios from 'axios'
import Loading from '../components/Loading'
import BookInfo from './BookInfo'
import BookRecommendation from './BookRecommendation'
import { Redirect, Link } from 'react-router-dom'
import Rating from '../components/Rating'
// import CreateBooks from './CreateBooks'
import { Row, Col } from 'react-bootstrap'
import EditBook from './EditBook'
import LendBook from './LendBook'
import LendList from './LendList'
import Toasts from '../components/Toasts'
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap'

export default class Book extends Component {
	constructor(props){
		super(props)

		this.state = {
			slug: this.props.match.params.id,
			book: [],
			loading: true,
			deleteVal: false,
			redirect: false,
			edit: false,
			lend: false,
			toast: false,
			toastMessage: null,
			toastTitle: null,
			partialLoading: false,
		}
	}

	static contextType = AppContext

  toggleRedirect () {
    this.setState({
      redirect: !this.state.redirect
    })
	}
	
	toggleToast = (message = null, title = null) => {
		this.setState({
			toast: !this.state.toast,
			toastMessage: message,
			toastTitle: title,
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

	toggleLend = () => {
		if (!this.state.lend && !this.state.book.availability){
			this.toggleToast()
		}else {
			this.setState({
				lend: !this.state.lend
			})
		}
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
		axios.post(`/api/deletebook/${this.state.slug}`)
			.then(response => {
				this.setState({
					// loading: false,
					redirect: true,
				})
			})
			.catch(error => {
				console.error(error)
			})
	}
	
	getBook = (id = null) => {
		this.setState({
			loading: true,
		})
		axios.post(`/api/book/${id || this.state.slug}`,
		{ library: this.context.library })
			.then(response => {
				this.setState({
					book: response.data,
					loading: false,
				})
			})
			.catch(error => {
				this.getBook()
				console.error(error.response)
			})
	}

	componentDidMount(){
		this.getBook()
	}

	render() {
		const {
			loading,
			book,
			deleteVal,
			redirect,
			edit,
			lend,
			toast,
			toastMessage,
			toastTitle,
			partialLoading,
    } = this.state

    const {
			id,
      name,
			author,
			genre,
      description,
      rating,
      cover,
    } = book

		return (
			<div className="animated fadeIn">
				{toast &&
				<Toasts 
					toasts={toast}
					toggle={this.toggleToast}
					title={toastTitle ? toastTitle : 'Sorry'}
					small="just now" 
					message={toastMessage ? toastMessage : "This book is not available in your library, You can direct the customer to another library"}
				/>}
				{partialLoading && <Loading/>}
				{redirect && <Redirect to="/books"/>}
        {loading ? <Loading/> : <>
					<Row>
						<Col lg={12} className="d-flex justify-content-between">
							<div className="display-4 text-capitalize">{name}</div>
							<div>
								<Button color="dark" onClick={this.toggleRedirect.bind(this)}>Go back</Button>
							</div>
						</Col>
						<img className="col-lg-4 col-md-6 mb-4" src={`/storage/book_cover/${cover}`} alt={name}/>
						<Col lg={4} md={6} className="mb-4">
							<Button
								className="btn-sm mr-1" 
								color="primary"
								onClick={this.toggleLend.bind(this)}
							><i className="cui-cart"></i>Lend
							</Button>
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
							<div className="text-capitalize">{author}</div>
							<div className="h4 pb-0 mb-0 text-capitalize">{genre}</div>
							<div><Rating rating={rating}/></div>
							<div className="font-weight-bold">{description}</div>
						</Col>
						<Col lg={4} md={6} >
							{(!loading && !partialLoading ) && <BookInfo id={id}/>}
						</Col>
						<div className="col-lg-4 col-md-6">
							{!loading && <LendList 
								dataUrl="booklendlist"
								dataPost={{
									book: id,
									library: this.context.library,
								}}
								toggleToast={this.toggleToast}
								toggleLoading={(value) => this.setState({ partialLoading: value })}
							/>}
						</div>
						<Col lg={8} md={12}>
							<BookRecommendation
								dataUrl={`bookrecommendation/${id}`}
								getBook={this.getBook}
								title="Also might like"
							/>
						</Col>
					</Row> </>
        }
{/* LEND COMPONENT */}
				<LendBook
					book={book}
					lend={lend}
					toggleLend={this.toggleLend}
					toggleToast={this.toggleToast}
					getBook={this.getBook}
				/>
{/* EDIT COMPONENT */}
				<EditBook
					book={book}
					edit={edit}
					toggleEdit={this.toggleEdit}
					getBook={this.getBook}
				/>
{/* DELETE MODAL */}
        <Modal
          isOpen={deleteVal}
          className="modal-danger modal-sm"
        >
          <ModalBody>
            <div className="lead">Do you want to delete this book?</div>
          </ModalBody>
          <ModalFooter>
            <Button className="btn-sm" color="danger" onClick={this.handleDelete.bind(this)}>Yes</Button>
            <Button className="btn-sm" color="success" onClick={this.toggleDelete.bind(this)}>No</Button>
          </ModalFooter>
        </Modal>
			</div>
		)
	}
}