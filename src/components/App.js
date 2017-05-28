import React from 'react'
import Header from './Header'
import ContestPreview from './ContestPreview'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contests: this.props.initialContests
        }
    }
    
    componentWillMount(){
       
    }

    render(){
        return(
            <div>
                <Header />
                {this.state.contests.map(contest => 
                    <ContestPreview key={contest.id} contest={contest} />
                )}
            </div>
        )
    }
}

export default App
