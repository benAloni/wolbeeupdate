import { Table } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TiPin } from "react-icons/ti";

export const ProjectDetails = () => {
  const [importanceLevels, setImportanceLevels] = useState({
    management: 'High',
    turnover: 'Medium',
    workLifeBalance: 'Low',
    managerialAttention: 'High',
    professionalism: 'Low'
  });

  const circleContainerStyle = {
    width: '120px',
    margin: '10px',
    position: 'relative',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const circleTextStyle = {
    fontSize: '12px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    height:'20px',
    marginTop:'30px'
    
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const experienceData = [
    {
      id: 1,
      name: "Compensation",
      time: "21/08/2023",
    },
    {
      id: 2,
      name: "Development plan",
      time: "10/01/2024",
    },
    {
      id: 3,
      name: "Personal interview",
      time: "17/04/2024",
    },
  ];

  const titleStyle = {
    textAlign: 'center',
    marginTop: '0',
  };

  const paragraphStyle = {
    position: 'relative',
    paddingLeft: '35px',
    marginBottom: '10px',
    fontSize: '16px',
  };

  const iconStyle = {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#FF902F',
  };

  const pinIconSize = 24;

  const getColor = (importance) => {
    switch (importance) {
      case 'High':
        return '#FF0000';
      case 'Medium':
        return '#FFA500';
      case 'Low':
        return '#008000';
      default:
        return '#000000';
    }
  };

  const containerStyle = {
    display: 'flex',
    gap: '15px'
  };

  const boxStyle = {
    backgroundColor: 'lightgrey',
    width: '380px',
    height: '300px',
    padding: '20px',
    marginBottom: '20px',
    border: 'solid black 0.3px'
  };

  return (
    <div className="tab-content">
      <div className="pro-overview tab-pane fade show active" id="emp_assets">
        <div style={containerStyle}>
          <div style={boxStyle}>
            <h3 style={titleStyle}>Wolbee’s Top insights</h3>
            <br />
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              Motivated by appreciation and responsibility
            </p>
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              High risk of turnover
            </p>
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              Possesses the potential and ambition to advance to a managerial career
            </p>
          </div>
          <div style={boxStyle}>
            <h3 style={titleStyle}>Latest insights</h3>
            <br />
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              loves to bake and cook
            </p>
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              His favorite restaurant is Minna tomei
            </p>
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              Will never miss a game of liverpool
            </p>
          </div>
    
          <div className="col-md-6 d-flex" style={{ width: '450px' }}>
            <div className="card profile-box flex-fill">
              <div className="card-body">
                <h3 className="card-title">
                  Lestest Activity{""}
                  <Link
                    to="#"
                    className="edit-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#experience_info"
                  >
                    <i className="fa fa-pencil" />
                  </Link>
                </h3>
                <div className="experience-box">
                  <ul className="experience-list">
                    {experienceData.map((item) => (
                      <li key={item.id}>
                        <div className="experience-user">
                          <div className="before-circle" />
                        </div>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <Link to="/" className="name">
                              {item.name}
                            </Link>
                            <span className="time">{item.time}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={wrapperStyle}>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Management</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.management}
              styles={buildStyles({
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.management),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Turnover</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.turnover}
              styles={buildStyles({
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.turnover),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Work-Life</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.workLifeBalance}
              styles={buildStyles({
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.workLifeBalance),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Managerial</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.managerialAttention}
              styles={buildStyles({
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.managerialAttention),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Professional</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.professionalism}
              styles={buildStyles({
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.professionalism),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListItem = ({ title, text }) => (
  <li>
    <div className="title">{title}</div>
    <div className="text">{text}</div>
  </li>
);

export default ProjectDetails;
