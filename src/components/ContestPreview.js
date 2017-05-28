import React from 'react'

class ContestPreview extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="contest">
                <h3>Category: {this.props.contest.categoryName}</h3>
                <p>Contest name: {this.props.contest.contestName}</p>
                <hr />
            </div>
        )
    }
}

export default ContestPreview