import React, {Component} from 'react';
import { connect } from "react-redux"


class Home extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div>
            {
                posts ? (
                    posts.map(post => (
                        <div>{post.title}</div>
                    ))
                ) : (
                    <h3>Loading...</h3>
                )
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect (mapStateToProps)(Home);