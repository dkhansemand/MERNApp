import React from 'react'

class Contest extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="fixed-action-btn horizontal">
                    <a className="btn-floating btn-large red">
                    <i className="material-icons">menu</i>
                    </a>
                    <ul>
                    <li><a className="btn-floating blue" onClick={this.props.contestListClick}>Back</a></li>
                    
                    </ul>
                </div>
                <div className="contestDescription">
                    {this.props.description}
                </div>
            </div>
        )
    }
}

export default Contest