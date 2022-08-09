import React from 'react'
import { HeroList } from '../components/HeroList'

export const DCPages = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <ul>
        <HeroList publisher='DC Comics'/>
      </ul>
    </>
  )
}
