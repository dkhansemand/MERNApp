import React from 'react'

class ContestPreview extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.onClick(this.props.contest.id)
    }

    render(){
        return(
            <div className="contest" onClick={this.handleClick}>
                <h3>Category: {this.props.contest.categoryName}</h3>
                <p>Contest name: {this.props.contest.contestName}</p>
                <hr />
            </div>
        )
    }
}

export default ContestPreview