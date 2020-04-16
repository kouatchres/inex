import React from 'react'
import { concat } from 'apollo-link'

const uniqueCodeGen = keyLength => {
  var i,
    key = '',
    //  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    characters =
      'abcdefghijklmnopqrstuvwxyzABCDEF@#$%&GHIJKLMNOPQRSTUVWXYZ0123456789'

  var charactersLength = characters.length

  for (i = 0; i < keyLength; i++) {
    key += characters.substr(
      Math.floor(Math.random() * charactersLength + 1),
      1,
    )
  }

  return key
}

const objectFromCode = codeValue => {
  const storedObject = {
    candCode: `${codeValue}`,
  }
  return storedObject
}

const centerExamSessionObjectFromCode = codeValue => {
  const storedObject = {
    centerExamSession: `${codeValue}`,
  }
  return storedObject
}

const candExamSessionCode = (candID, examID, sessionID) => {
  return `${candID + examID + sessionID}`
}

const getSelectedObject = (dataSource, objectID) => {
  // 1 copy the data source
  if (dataSource.length > 0) {
    const tempObjects = [...dataSource]
    // get the object
    const selectedObject = tempObjects.find(item => item.id === objectID)
    return selectedObject
  }
}

Number.prototype.pad = function(size) {
  var s = String(this)
  while (s.length < (size || 2)) {
    s = '0' + s
  }
  return s
}

const calcCandAve = candScores => {
  const aveTotal =
    candScores &&
    candScores.reduce((tally, item) => tally + item.subjectAve * item.coeff, 0)
  const coeffTotal = candScores.reduce(
    (tally, item) => (item.subjectAve === null ? tally : tally + item.coeff),
    0,
  )
  const candAve = aveTotal / coeffTotal
  return candAve
}
const calcCandTotalScore = candScores => {
  const aveTotal =
    candScores &&
    candScores.reduce((tally, item) => tally + item.subjectAve * item.coeff, 0)
  return aveTotal
}
const calcCandTotalCoeff = candScores => {
  const coeffTotal =
    candScores &&
    candScores.reduce(
      (tally, item) => (item.subjectAve === null ? tally : tally + item.coeff),
      0,
    )
  return coeffTotal
}
const roundFloatNumber = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

export {
  candExamSessionCode,
  roundFloatNumber,
  calcCandTotalScore,
  calcCandTotalCoeff,
  calcCandAve,
  objectFromCode,
  updateItemMutation,
  uniqueCodeGen,
  getSelectedObject,
  registrationSerialNumber,
  centerExamSessionObjectFromCode,
}
