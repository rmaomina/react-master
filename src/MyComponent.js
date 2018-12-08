import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'MA'
    }

    static propTypes = {
        name: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            likes: 100,
            favor: 0
        }
    }

    render() {
        return (
            <div>
                <p>Hello I'm { this.props.name } Component!</p>
                <p>Likes : { this.state.likes } </p>
                <p>favor : { this.state.favor } </p>
                <button onClick={() => {
                    this.setState(
                        {
                            likes: this.state.likes + 1
                        }
                    )
                }

                }>thumbs up</button>
                
                <button onClick={() => {
                    this.setState(
                            {
                                favor: this.state.favor + 2
                            }
                        )
                    }
                }
                >favorite</button>

                <button onClick={() => {
                    this.setState(
                            {
                                likes: this.state.likes - 1
                            }
                        )
                    }
                }
                >don't like</button>

            </div>
        );
    }


}

export default MyComponent;