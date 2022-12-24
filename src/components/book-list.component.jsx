import React, {
  Component
} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class BookList extends Component {
  constructor() {
    super();

    this.state = {
      loaded: true,
      books: []
    }
  }


  componentDidMount() {
    console.log('starting');
    axios.get('http://localhost:4000/books').then(result => {
      console.log('done');
      this.setState({ books: result.data });
      this.setState({ loaded: true })
    })
  }

  render() {
    return (
      <div>
        {this.state.loaded &&

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Pages</th>
                <th>Date</th>
                <th>Short Description</th>
                <th>Status</th>
                <th>Authors</th>
                <th>Categories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map(book => {
                return (
                  <tr>
                    <td>{book._id}</td>
                    <td>{book.title}</td>
                    <td>{book.pageCount}</td>
                    <td>{book.publishedDate}</td>
                    <td>{book.shortDescription}</td>
                    <td>{book.status}</td>
                    <td>{book.authors}</td>
                    <td>{book.categories}</td>
                    <td className='d-flex flex-column'>
                      <Link variant="warning" to={`/edit-book/${book._id}`}>Edit</Link>
                      
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        }
      </div>
    )
  }
}