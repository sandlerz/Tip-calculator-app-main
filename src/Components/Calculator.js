import Bill from './Bill'
import SelectTip from './SelectTip'
import NumberOfPeople from './NumberOfPeople'
import TipAmount from './TipAmount'
import Total from './Total'

import '../Style/calculator.css'

export default function Calculator() {
  return (
    <div className='Calculator'>
      <div className='left-container'>
        <Bill />
        <SelectTip />
        <NumberOfPeople />
      </div>
      <div className='right-container'>
        <TipAmount />
        <Total />
        <button className='reset'>Reset</button>
      </div>
    </div>
  )
}