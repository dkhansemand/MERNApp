import React from 'react'
import Header from './Header'
import ContestList from './ContestList'
import Contest from './Contest'
import * as api from '../api'

const pushState = (obj, url) => 
    window.history.pushState(obj, '', url)

const onPopState = handler => {
    window.onpopstate = handler
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.initialData
        this.fetchContest = this.fetchContest.bind(this)
        this.fetchContestList = this.fetchContestList.bind(this)
        this.currentContent = this.currentContent.bind(this)
        this.pageHeader = this.pageHeader.bind(this)
    }
    
    componentDidMount(){
        onPopState((event) => {
          this.setState({
              currentContestId: (event.state || {}).currentContestId
          })  
        })
    }

    componentWillUnmount(){
        onPopState(null)
    }

    fetchContest(contestId){
        pushState(
            { currentContestId: contestId},
            `/Contest/${contestId}`
        )
        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            })
        })
    }

    fetchContestList(){
        pushState(
            { currentContestId: null},
            `/`
        )
        api.fetchContestList().then(contests => {
            this.setState({
                currentContestId: null,
                contests
            })
        })
    }


    currentContent(){
        if(this.state.currentContestId){
            return <Contest 
                    contestListClick={this.fetchContestList}
                    {...this.state.contests[this.state.currentContestId]} />
        }
            return <ContestList 
                    onContestClick={this.fetchContest}
                    contests={this.state.contests} />
    }

    pageHeader(){
        if(this.state.currentContestId){
            return this.currentContent().props.contestName
        }
        return 'Contests'
    }

    render(){
        return(
            <div>
                <Header title={this.pageHeader()}/>
                {this.currentContent()}
            </div>
        )
    }
}

export default App
