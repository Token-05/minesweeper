import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Blog(props) {
//     const sidebar = (    
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>          
//                 {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map((post) =>    
//         <div key={post.id}>      
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//         </div>
//     );
//     return (
//         <div>
//         {sidebar}      
//         <hr />
//         {content}    
//         </div>
//     );
// }

// const posts = [
// {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
// {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
// <Blog posts={posts} />,
// document.getElementById('root')
// );


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>        
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />        
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
<NameForm />,
document.getElementById('root')
);