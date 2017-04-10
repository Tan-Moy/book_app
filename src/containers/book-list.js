import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';
//^ takes the return value from select-book action and makes sure that it flows through the different reducers

class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li
                    onClick = {()=>this.props.selectBook(book)}
                    key={book.title} className="list-group-item">
                       {book.title}
                </li>
            )
        })
    }

    render(){
        return(
            <ul className = 'list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

//Whatever is returned will show up as props inside of BookList container
function mapStateToProps (state){
    return{
        books: state.books
    };
}

//Whatever is returned will show up as props inside of BookList container
function mapDispatchToProps(dispatch){
    // whenever selectBook is called, the result should be
    // passed to all of our reducers.
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//Promote bookList to container - It needs to know about this
//new dispatch method, selectBook. Make it availabe as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);