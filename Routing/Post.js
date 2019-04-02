import React,{ Component } from 'react';
import axios from 'axios';

class Post extends Component{
  /*componentDidMount(){
    console.log(this.props);
  }*/
  state = {
    posts: null,
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    //console.log(id);
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
     .then(res=>{
      //console.log(this.state);
      this.setState({
        posts: res.data // res.data.filter(arr=>{ return arr.id === id })

      })
      console.log(this.state);
    })
  }
  render(){
   const { posts } = this.state;
   const postList = posts?(
        <div className='post card container' key={ posts.id }>
          <div className='card-item'>
            <span className='card-title'>{ posts.title }</span>
            <p className = 'card-body'>{ posts.body }</p>
          </div>
        </div>
  ):(<h5> Loding... </h5>)
    return(
      <div className = 'post-card container center'>
       { postList }
      </div>
    )
  }
}

export default Post;
