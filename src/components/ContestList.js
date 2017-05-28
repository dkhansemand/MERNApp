import React from 'react'
import ContestPreview from './ContestPreview'

class ContestList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                 {Object.keys(this.props.contests).map(contestId => 
                    <ContestPreview key={contestId} onClick={this.props.onContestClick} contest={this.props.contests[contestId]} />
                )}
            </div>
        )
    }
    
}

export default ContestList