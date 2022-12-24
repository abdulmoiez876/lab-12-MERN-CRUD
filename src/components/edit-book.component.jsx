import { React, Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EditBook extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeIsbn = this.onChangeIsbn.bind(this);
        this.onChangePageCount = this.onChangePageCount.bind(this);
        this.onChangePublishedDate = this.onChangePublishedDate.bind(this);
        this.onChangeThumbNailUrl = this.onChangeThumbNailUrl.bind(this);
        this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
        this.onChangeLongDescription = this.onChangeLongDescription.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this)

        // State
        this.state = {
            _id: '',
            title: '',
            isbn: '',
            pageCount: "",
            publishedDate: "",
            thumbnailUrl: "",
            shortDescription: "",
            longDescription: "",
            status: "",
            authors: "",
            categories: "",
        }

        axios.get(`http://localhost:4000/book/${this.props.match.params.id}`).then(response => {
            this.setState({
                _id: response.data._id,
                title: response.data.title,
                isbn: response.data.isbn,
                pageCount: response.data.pageCount,
                publishedDate: response.data.publishedDate,
                thumbnailUrl: response.data.thumbnailUrl,
                shortDescription: response.data.shortDescription,
                longDescription: response.data.longDescription,
                status: response.data.status,
                authors: response.data.authors[0],
                categories: response.data.categories[0]
            })
        })
    }

    onChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    onChangeIsbn(event) {
        this.setState({
            isbn: event.target.value
        })
    }

    onChangePageCount(event) {
        this.setState({
            pageCount: event.target.value
        })
    }

    onChangePublishedDate(event) {
        this.setState({
            publishedDate: event.target.value
        })
    }

    onChangeThumbNailUrl(event) {
        this.setState({
            thumbnailUrl: event.target.value
        })
    }

    onChangeShortDescription(event) {
        this.setState({
            shortDescription: event.target.value
        })
    }

    onChangeLongDescription(event) {
        this.setState({
            longDescription: event.target.value
        })
    }

    onChangeStatus(event) {
        this.setState({
            status: event.target.value
        })
    }

    onChangeAuthor(event) {
        this.setState({
            authors: event.target.value
        })
    }

    onChangeCategory(event) {
        this.setState({
            categories: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:4000/book', {
            ...this.state
        }).then(result => {
            this.props.history.push('/book-list')
        })
    }


    onDelete(event) {

        // console.log(this.state._id);
        axios.post('http://localhost:4000/deleteBook', {
            _id: this.state._id
        }).then(result => {
            console.log('deleted');
            this.props.history.push('/book-list')
        })
    }

    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} />
                </Form.Group>

                <Form.Group controlId="isbn">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="number" value={this.state.isbn} onChange={this.onChangeIsbn} />
                </Form.Group>

                <Form.Group controlId="pageCount">
                    <Form.Label>Page Count</Form.Label>
                    <Form.Control type="number" value={this.state.pageCount} onChange={this.onChangePageCount} />
                </Form.Group>

                <Form.Group controlId="publishedDate">
                    <Form.Label>Published Date</Form.Label>
                    <Form.Control type="text" value={this.state.publishedDate} onChange={this.onChangePublishedDate} />
                </Form.Group>

                <Form.Group controlId="thumbnailUrl">
                    <Form.Label>Thumbnail URL</Form.Label>
                    <Form.Control type="text" value={this.state.thumbnailUrl} onChange={this.onChangeThumbNailUrl} />
                </Form.Group>

                <Form.Group controlId="shortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control type="text" value={this.state.shortDescription} onChange={this.onChangeShortDescription} />
                </Form.Group>

                <Form.Group controlId="longDescription">
                    <Form.Label>Long Description</Form.Label>
                    <Form.Control type="text" value={this.state.longDescription} onChange={this.onChangeLongDescription} />
                </Form.Group>

                <Form.Group controlId="longDescription">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" value={this.state.status} onChange={this.onChangeStatus} />
                </Form.Group>

                <Form.Group controlId="longDescription">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" value={this.state.author} onChange={this.onChangeAuthor} />
                </Form.Group>

                <Form.Group controlId="longDescription">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={this.state.categories} onChange={this.onChangeCategory} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Update Book
                </Button>
                <Button variant="danger" onClick={this.onDelete}>Delete</Button>
            </Form>
        </div>);
    }
}

export default EditBook;