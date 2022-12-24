import React, {
  Component
} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default class BookList extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      books: [
        //   {
        //   _id: 1,
        //   title: "Unlocking Android",
        //   isbn: "1933988673",
        //   pageCount: 416,
        //   publishedDate: "2009-04-01T07:00:00.000Z",
        //   thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        //   shortDescription: "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
        //   longDescription: "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
        //   status: "PUBLISH",
        //   authors: [
        //     "W. Frank Ableson",
        //     "Charlie Collins",
        //     "Robi Sen"
        //   ],
        //   categories: [
        //     "Open Source",
        //     "Mobile"
        //   ]
        // },
        // {
        //   _id: 2,
        //   title: "Android in Action, Second Edition",
        //   isbn: "1935182722",
        //   pageCount: 592,
        //   publishedDate: "2011-01-14T08:00:00.000Z",
        //   thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
        //   shortDescription: "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        //   longDescription: "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        //   status: "PUBLISH",
        //   authors: [
        //     "W. Frank Ableson",
        //     "Robi Sen"
        //   ],
        //   categories: [
        //     "Java"
        //   ]
        // },
      ]
    }
  }


  componentDidMount() {
    console.log('starting');
    axios.get('http://localhost:4000/books').then(result => {
      console.log('done');
      this.setState({ books: result.data });
      this.setState({loaded: true})
    })
  }
  render() {
    return (
      <div>
        {this.state.loaded &&

          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "1vw" }}>ID</th>
                <th style={{ width: "1vw" }}>Title</th>
                <th style={{ width: "1vw" }}>Pages</th>
                <th style={{ width: "1vw" }}>Date</th>
                <th style={{ width: "15vw" }}>Short Description</th>
                <th style={{ width: "15vw" }}>Long Description</th>
                <th style={{ width: "1vw" }}>Status</th>
                <th style={{ width: "1vw" }}>Authors</th>
                <th style={{ width: "1vw" }}>Categories</th>
                {/* <th style={{ width: "1vw" }}>ISBN</th> */}
                {/* <th style={{ width: "12px" }}>URL</th> */}
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
                    <td>{book.longDescription?.slice(0, 200)}...</td>
                    <td>{book.status}</td>
                    <td>{book.authors}</td>
                    <td>{book.categories}</td>
                    {/* <td>{book.isbn}</td> */}
                    {/* <td style={{ width: "12px" }}>{book.thumbnailUrl}</td> */}
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