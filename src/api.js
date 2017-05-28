import axios from 'axios'

export const fetchContest = contestId => {
    return axios.get(`/api/Contest/${contestId}`)
                .then(resp => resp.data)
}

export const fetchContestList = () => {
    return axios.get(`/api/Contests`)
                .then(resp => resp.data.contests)
}