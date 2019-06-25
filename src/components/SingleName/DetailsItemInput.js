import React from 'react'
import styled from '@emotion/styled'
import { getPlaceholder } from '../../utils/records'
import DefaultInput from '../Forms/Input'

const Input = styled(DefaultInput)`
  width: 100%;
`

const DetailsItemInput = ({
  updateValue,
  isValid,
  isInvalid,
  dataType,
  contentType
}) => {
  return (
    <Input
      warning={dataType === 'content' && contentType === 'oldcontent'}
      valid={isValid}
      invalid={isInvalid}
      placeholder={getPlaceholder(dataType, contentType)}
      onChange={e => {
        updateValue(e.target.value)
      }}
    />
  )
}

export default DetailsItemInput
