import React from "react";
import "../styles/Experience.css";

class Experience extends React.Component {
  render() {
    return (
      <section className="page-section" id="WorkExperience">
        <div className="project-section-heading">
          <h2 className="sectionCentralHeading">Experience</h2>
          <h3 className="section-subheading text-muted">
            Incoming Student @ GC - PSPC - 
                    Digital Services Branch - Vendor Management Team 
          </h3>
        </div>
 
          
          
          <div className="workExperienceMain">
            <table className="workExperienceTable">
            <h2>Government of Canada </h2>
              <tbody>
                <tr>
                  <th scope="row" style={{ width: "100%" }}>
                  Junior Technical Analyst @ GC - PSPC - 
                    Digital Services Branch - Incident Team
                  </th>



            
                </tr>
            
                <tr>
                    
                  <td colSpan="3">

                  <div className="workTermDate">
                    May 2022 - August 2023 (4 Work Terms)

                </div>
                    <p>

                    During my time as a student in the Incident Team for Public Service and Procurement Canada (PSPC),
                    I collaborated 
                      with cross-functional teams through Jira and triage mailboxes 
                      services in order to resolve system outages, server incidents
                      that enabled 30+ departments with a 90% increase of performance for all servers and workspaces.
                      
                
                    </p>


                    <p> I managed and manipulated databases systems of 10K+ users on Opentext Directories and I
                     Generated over 25+ weekly reports on our system performances which provided valuable 
                     insights and statistical data for teams and clients.

                    </p>
                    <p>
                      Technologies & Frameworks: Jira, OS, Opentext Directories, GCDocs. 
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
      </section>
    );
  }
}

export default Experience;
