import express from 'express'
import Data from '../src/testData'

const router = express.Router()

const contests = Data.contests.reduce((obj, contest) => {
                    obj[contest.id] = contest
                    return obj
                }, {})

router.get('/contests', (req, res) => {
    res.send({ 
        contests: contests
    })
})

router.get('/Contest/:contestId', (req, res) => {
    let contest = contests[req.params.contestId]
    contest.description = 'lorem ipsum.....'
    res.send(contest)
})

export default router