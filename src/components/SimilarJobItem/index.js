import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

const SimiarJobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = jobDetails

  return (
    <li className="similar-job-item">
      <div className="logo-title-location-container">
        <div className="logo-title-container">
          <img
            src={companyLogoUrl}
            className="company-logo"
            alt="company Logo"
          />
          <div className="title-rating-container">
            <h1 className="title-heading">{title}</h1>
            <div className="rating-container">
              <BsStarFill className="rating-icon" />
              <p className="rating-heading">{rating}</p>
            </div>
          </div>
        </div>
        <h1 className="description-heading">Description</h1>
        <p className="description-text">{jobDescription}</p>
        <div className="location-employee-container">
          <div className="location-container">
            <MdLocationOn className="location-icon" />
            <p className="location-heading">{location}</p>
          </div>
          <div className="employee-type-container">
            <BsFillBriefcaseFill className="breif-case-icon" />
            <p className="employee-type-heading">{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SimiarJobItem
