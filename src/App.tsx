import React, {useEffect, useState} from 'react'
import { InputNumber } from 'antd'
import './App.css'
import {client} from './utils'
import styled from 'styled-components'
import TrialCard from './components/TrialCard/TrialCard';

const Wrapper = styled.div`
  background-color: #ccc;
  padding: 10px;
`


export default function App() {
  const [trials, setTrials] = useState<any[]>([])
  const [pageNum, setPageNum] = useState<Number>(1)

  const getTrials = async () => {
    try {
      const response: any = await client.get(`/trials?page=${pageNum}&pageSize=5`)
      setTrials(response.data.trials)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTrials()
  }, [pageNum])

  const onPageNumChange = (pageNum: Number) => {
    setPageNum(pageNum)
  }

  return (
    <Wrapper>
      {trials.length ? trials.map((trial) => (
        <TrialCard key={trial.id} trial={trial} />
      )) : null }
      <InputNumber defaultValue={1} onChange={onPageNumChange} />
    </Wrapper>
  )
}
