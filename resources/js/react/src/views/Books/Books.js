import React, { Component } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import BookCard from './BookCard'
import { Row, Col, Button, Spinner } from 'reactstrap'
import CreateBooks from './CreateBooks'

export default class Books extends Component {
	
	constructor(){
		super()

		this.state = {
			books: [],
			loading: true,
			url: '/api/books',
			pagination: [],
			disabled: true,
			create: false,
			spinner: false,
		}
	}

	getData = (dataUrl,type = null) => {
		type === 'RELOAD' && this.setState({ loading: true })

		axios.get(dataUrl)
			.then(response => {
				this.setState({
					url: response.data.next_page_url,
					disabled: response.data.current_page === response.data.last_page && true,
					loading: false,
					spinner: false
				})

				if (type === 'RELOAD' ) {
					this.setState({
						books: response.data.data
					})
				} else {
					this.setState({
						books: this.state.books.length > 0 ? this.state.books.concat(response.data.data): response.data.data,
					})
				}

				this.makePagination(response.data)
			})
			.catch(error => setTimeout(() => this.getBooks(), 5000))
	}

	getBooks = () => {
		this.setState({loading: true})
		this.getData(this.state.url)
	}

	loadMore = () => {
		this.setState({
			url: this.state.pagination.next_page_url
		})
		this.setState({ spinner: true })
		this.state.pagination.current_page != this.state.pagination.last_page && this.getData(this.state.url)
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

	toggleCreate = (redirectValue = false) => {
		this.setState({
			create: !this.state.create,
			redirect: redirectValue,
		})
	}

	componentDidMount(){
		this.getBooks()
	}

	render() {
		const {
			books,
			loading,
			disabled,
			create,
			spinner,
		} = this.state

		return (
			<div className="animated fadeIn">
				<Row className="ml-auto">
					<Button
						color="primary"
						className="mb-3 btn-sm"
						onClick={this.toggleCreate.bind(this)}
					>Add Book</Button>
					<CreateBooks
						create={create}
						toggleCreate={this.toggleCreate}
						getData={this.getData}
					/>
				</Row>
				<Row>
					{loading ? <Col className="d-flex justify-content-center" lg={12}><Loading type="sm"/></Col> :
					 books.map( book => 
					<BookCard
						key={book.id}
						book={book}
						getBook={null}
					/>)}
				</Row>
				<Row className="d-flex justify-content-center">
					<Button 
						color="dark" 
						className="my-3"
						disabled={disabled}
						onClick={this.loadMore.bind(this)}
					>{ spinner ? <Spinner className="mx-3" style={{ height: '1rem', width: '1rem'}} color="light"/> :  <i className="cui-chevron-bottom mx-3"></i> }</Button>
				</Row>
			</div>
		)
	}
}
