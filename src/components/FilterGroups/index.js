import {Bssearch} from 'react-icons/bs'

import ProfileDetails from '../ProfileDetails'

import './index.css'

const FilterGroups = props => {
  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props

    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading">Type of Employment</h1>
        <ul className="employee-lists">
          {employmentTypesList.map(eachEmployeeType => {})}
        </ul>
      </div>
    )
  }
}
export default FilterGroups
