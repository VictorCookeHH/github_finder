import React from "react"
import {
  FaEye,
  FaStar,
  FaInfo,
  FaLink,
  FaStart,
  FaUtensils,
} from "react-icons/fa"

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo
  return (
    <div className="mb-2 rounded-mb card bg-gray-100 hover:bg-gray-200">
      <h3 className="mb-2 text-xl font-semibold">
        <a href={html_url}>
          <FaLink className="inline mr-1" /> {name}
        </a>
      </h3>
      <div>
        <p className="mb-3">{description}</p>
        <div className="mr-2 badge badge-info badge-lg">
          <FaEye className="mr-2" />
          {watchers_count}
        </div>
        <div className="mr-2 badge badge-success badge-lg">
          <FaStar className="mr-2" />
          {stargazers_count}
        </div>
        <div className="mr-2 badge badge-info badge-lg">
          <FaInfo className="mr-2" />
          {open_issues}
        </div>
        <div className="mr-2 badge badge-info badge-lg">
          <FaUtensils className="mr-2" />
          {forks}
        </div>
      </div>
    </div>
  )
}

export default RepoItem
