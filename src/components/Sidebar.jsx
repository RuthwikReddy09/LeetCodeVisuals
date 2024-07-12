import React from 'react'
import "../styles/Sidebar.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-container">
        <div className="sidebar-heading">
            <h4 className='sidebar-heading'>Problems</h4>
        </div>
        <div className="sidebar-problems">
            <Link to="Two Sum" className="sidebar-problem">1. Two Sum</Link>
            <Link  to="Palindrome"  className="sidebar-problem">2. Palindrome</Link>
            <Link  to="Two Sum" className="sidebar-problem">3.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link to="Two Sum"  className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
            <Link  to="Two Sum" className="sidebar-problem">4.</Link>
        </div>
        </div>
    </div>
  )
}

export default Sidebar