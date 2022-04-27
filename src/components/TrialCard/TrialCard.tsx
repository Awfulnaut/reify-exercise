import { Card, Button } from 'antd'
import styled from 'styled-components';
import React, {useState} from 'react';
import dayjs from 'dayjs';

interface TrialCardProps {
  trial: any
}

const StyledTrialCard = styled(Card)`
  margin-bottom: 10px;
  position: relative;
`

const OpenEnrollmentBadge = styled.div`
  background-color: green;
  color: white;
  padding: 2px;
  border-radius: 5px;
  position: absolute;
  top: -5px;
  left: -5px;
`

const TrialCard = ({ trial }: TrialCardProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const isOpenEnrollment = dayjs(trial.first_enrollment_at).isBefore(dayjs())

  const handleShowDetails = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <StyledTrialCard title={trial.name}>
      {isOpenEnrollment ? (
        <OpenEnrollmentBadge>Open Enrollment</OpenEnrollmentBadge>
      ): null}
      {isExpanded && (trial.description || trial.first_enrollment_at) ? (
        <>
          <h2>Description</h2>
          <p>{trial.description}</p>
          <p>{trial.first_enrollment_at}</p>
        </>
      ) : null}
      {trial.description || trial.first_enrollment_at ? (
        <Button onClick={handleShowDetails} type="link">
          {isExpanded ? 'Hide details' : 'Show details'}
        </Button>
      ) : null}
    </StyledTrialCard>
  )
}


export default TrialCard
