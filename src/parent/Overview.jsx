import React, { useState } from "react";
import ParentNavbar from "../components/ParentNavbar";
import {
  childrenList,
  getAcuteMUAC,
  getBMI,
  getChildAge,
  getDailyNutritionTip,
  getFirstName,
  getLastMeasured,
  getLatestMeasurement,
  getStunting,
  getWasting,
} from "../assets/asset";
import {
  LuActivity,
  LuBaby,
  LuCalendar,
  LuHeart,
  LuPlus,
  LuRuler,
  LuScale,
  LuTrendingUp,
  LuTriangleAlert,
} from "react-icons/lu";
import { IoWarning } from "react-icons/io5";
import { MdCheckCircle, MdOutlineCheckCircle } from "react-icons/md";
import { TbCircleDashedCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

import "./../style/parent.scss";

const loggedInUser = childrenList[0];

const ParentOverview = () => {
  const [activeTab, setActiveTab] = useState("children");
  const [measurementTab, setMeasurementTab] = useState("All");

  return (
    <>
      <div className="parent-dashboard">
        <div className="overview">
          <ParentNavbar />
          <div className="hero">
            <div className="container">
              <div className="content">
                <div>
                  <h1>Welcome back, {getFirstName(loggedInUser.fullname)} </h1>
                  <p>
                    Track your children's health and get AI-powered nutrition
                    guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="number-grids">
            <div className="container">
              <div className="content">
                <div className="box childs">
                  <span className="icon">
                    <LuBaby />
                  </span>
                  <h4>Children</h4>
                  <h2>{loggedInUser.children.length}</h2>
                  <p>
                    Registered{" "}
                    {loggedInUser.children.length > 1 ? "children" : "child"}
                  </p>
                </div>
                <div className="box healthy">
                  <span className="icon">
                    <LuHeart />
                  </span>
                  <h4>Healthy</h4>
                  <h2>{loggedInUser.children.length}</h2>
                  <p>
                    {loggedInUser.children.length > 1
                      ? "children are"
                      : "child is"}{" "}
                    in good conditions
                  </p>
                </div>
                <div className="box risk">
                  <span className="icon">
                    <LuTriangleAlert />
                  </span>
                  <h4>Children</h4>
                  <h2>{loggedInUser.children.length}</h2>
                  <p>
                    {loggedInUser.children.length > 1 ? "children" : "child"}{" "}
                    needs attention
                  </p>
                </div>
                <div className="box grow">
                  <span className="icon">
                    <LuTrendingUp />
                  </span>
                  <h4>Score</h4>
                  <h2>73%</h2>
                  <p>Overall health score</p>
                </div>
              </div>
            </div>
          </section>

          <div className="main-overview">
            <div className="container">
              <div className="content">
                <div className="children-mgt">
                  <div className="tabs">
                    <button
                      className={activeTab === "children" ? "active" : ""}
                      onClick={() => setActiveTab("children")}
                    >
                      Children
                    </button>

                    <button
                      className={activeTab === "measurez" ? "active" : ""}
                      onClick={() => setActiveTab("measurez")}
                    >
                      Measurements
                    </button>

                    <button
                      className={activeTab === "ai" ? "active" : ""}
                      onClick={() => setActiveTab("ai")}
                    >
                      <span>AI Insights</span>
                    </button>
                  </div>
                  <div className="tabs_contents">
                    {activeTab === "children" && (
                      <div className="tab-content">
                        <div className="tab-title">
                          <div>
                            <h3>Children's Health Status</h3>
                          </div>
                          <div>
                            <button>
                              <span>
                                <LuPlus />
                              </span>
                              <span>Add Child</span>
                            </button>
                          </div>
                        </div>
                        <div className="children_list">
                          {loggedInUser.children.map((child, index) => (
                            <div className="child_box" key={index}>
                              <div className="box-title">
                                <div className="child_name">
                                  <h3>{child.name}</h3>
                                  <span className="status">
                                    {getLatestMeasurement(child.measurements)
                                      ? getAcuteMUAC(
                                          getLatestMeasurement(
                                            child.measurements
                                          ).muacCm
                                        ).classification
                                      : "No data"}
                                  </span>
                                </div>
                                <div className="child_summary">
                                  <span>{getChildAge(child.birthday)}</span>
                                  <span>{child.gender}</span>
                                  <span>
                                    Last measured{" "}
                                    {getLatestMeasurement(child.measurements)
                                      ? getLastMeasured(
                                          getLatestMeasurement(
                                            child.measurements
                                          ).date
                                        )
                                      : "No data"}
                                  </span>
                                </div>
                              </div>
                              <ul className="signs_box">
                                <li>
                                  <div>
                                    <span className="icon">
                                      <LuScale />
                                    </span>
                                    <p>BMI</p>
                                    <h3>
                                      {getLatestMeasurement(child.measurements)
                                        ? getBMI(
                                            getLatestMeasurement(
                                              child.measurements
                                            ).weightKg,
                                            getLatestMeasurement(
                                              child.measurements
                                            ).heightCm
                                          )
                                        : "No data"}
                                    </h3>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <span className="icon">
                                      <LuRuler />
                                    </span>
                                    <p>MUAC</p>
                                    <h3>
                                      {getLatestMeasurement(child.measurements)
                                        ? getLatestMeasurement(
                                            child.measurements
                                          ).muacCm + "cm"
                                        : "No data"}
                                    </h3>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <span className="icon">
                                      <LuActivity />
                                    </span>
                                    <p>Stunting</p>
                                    <h3>{getStunting(child)}</h3>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <span className="icon">
                                      <LuTrendingUp />
                                    </span>
                                    <p>Wasting</p>
                                    <h3>{getWasting(child)}</h3>
                                  </div>
                                </li>
                              </ul>
                              {getLatestMeasurement(child.measurements) &&
                                getAcuteMUAC(
                                  getLatestMeasurement(child.measurements)
                                ).classification ===
                                  "Moderate Acute Malnutrition (MAM)" && (
                                  <span className="stats-icon risk">
                                    <IoWarning />
                                  </span>
                                )}
                              {getLatestMeasurement(child.measurements) &&
                                getAcuteMUAC(
                                  getLatestMeasurement(child.measurements)
                                ).classification === "Normal" && (
                                  <span className="stats-icon risk">
                                    <TbCircleDashedCheck />
                                  </span>
                                )}
                              <div className="box_btns">
                                <button className="">
                                  <span>View Details</span>
                                </button>
                                <button className="record">
                                  <span>Record Measurement</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeTab === "measurez" && (
                      <div className="tab-content">
                        <div className="tab-title">
                          <div>
                            <h3>Weekly Measurements</h3>
                          </div>
                        </div>

                        <div className="measure-tabs">
                          <button
                            className={measurementTab === "All" ? "active" : ""}
                            onClick={() => setMeasurementTab("All")}
                          >
                            All
                          </button>

                          {loggedInUser.children.map((child) => (
                            <button
                              key={child.id}
                              className={
                                measurementTab === child.id ? "active" : ""
                              }
                              onClick={() => setMeasurementTab(child.id)}
                            >
                              {getFirstName(child.name)}
                            </button>
                          ))}
                        </div>

                        <div className="measures_container">
                          {(() => {
                            // Get all measurements
                            const allMeasurements =
                              loggedInUser.children.flatMap((child) =>
                                child.measurements.map((m) => ({
                                  ...m,
                                  childName: child.name,
                                  childId: child.id,
                                }))
                              );

                            // Filter based on selected tab
                            const filteredMeasurements =
                              measurementTab === "All"
                                ? allMeasurements
                                : allMeasurements.filter(
                                    (m) => m.childId === measurementTab
                                  );

                            if (filteredMeasurements.length === 0) {
                              return (
                                <div className="nothing">
                                  <div>
                                    <span className="icon">
                                      <LuCalendar />
                                    </span>
                                    <p>No measurements found</p>
                                    <button>
                                      <span>Schedule Measurement</span>
                                    </button>
                                  </div>
                                </div>
                              );
                            }

                            return (
                              <ul className="measurements-list">
                                {filteredMeasurements.map(
                                  (measurement, index) => (
                                    <li
                                      key={index}
                                      className="measurement-item"
                                    >
                                      <strong>{measurement.childName}</strong> –{" "}
                                      {measurement.date}
                                      <ul>
                                        <li>
                                          Weight: {measurement.weightKg} kg
                                        </li>
                                        <li>
                                          Height: {measurement.heightCm} cm
                                        </li>
                                        <li>MUAC: {measurement.muacCm} cm</li>
                                      </ul>
                                    </li>
                                  )
                                )}
                              </ul>
                            );
                          })()}
                        </div>
                      </div>
                    )}
                    {activeTab === "ai" && (
                      <div className="tab-content">
                        <div className="tab-title">
                          <div>
                            <h3>AI Powered Insights</h3>
                          </div>
                        </div>
                        <div className="insight_container">
                          {loggedInUser.children.map((child) => {
                            const insights = child.aiInsights;

                            const isHealthy =
                              insights &&
                              insights.bio.toLowerCase().includes("normal");
                            //   && insights.recommendations.length < 3;

                            return (
                              <div className="insight_card" key={child.id}>
                                <h3>
                                  {isHealthy ? (
                                    <MdOutlineCheckCircle className="icon healthy" />
                                  ) : (
                                    <LuTriangleAlert className="icon alert" />
                                  )}{" "}
                                  {isHealthy
                                    ? "Growing Well"
                                    : "Attention Needed"}{" "}
                                  • {child.name}
                                </h3>
                                <p className="bio">{insights.bio}</p>

                                <div className="action-buttons">
                                  {isHealthy ? (
                                    <button className="btn growth">
                                      <span>View Growth Chart</span>
                                    </button>
                                  ) : (
                                    <>
                                      <button className="btn recommed">
                                        <span>View Recommendations</span>
                                      </button>
                                      <button className=" contact">
                                        <span>Contact Advisor</span>
                                      </button>
                                    </>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="sidebar-conts">
                  <div className="daily_tips">
                    <div>
                      <h4>Today's Nutrition Tip</h4>
                      <p>{getDailyNutritionTip()}</p>
                      <Link>
                        <span>Learn more</span>
                      </Link>
                    </div>
                  </div>

                  <div className="weekly_checkin">
                    <div>
                      <h4>Weekly Check-in</h4>
                      <p>
                        Record this week's measurements and receive updated
                        recommendations
                      </p>

                      <Link to={"/measurements"}>
                        <span>Start Weekly Check-in</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentOverview;
