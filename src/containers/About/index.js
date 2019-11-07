import React, { Component } from 'react';
import ProjectTable from '../../components/ProjectTable';
const data = [
  {
    no: 1,
    code: "Yasuo",
    name: " Nagata",
    firstName: "Cu",
    lastName: "Shu",
    position: "dr",
    status: "working",
    bill: true
  },
  {
    no: 2,
    code: "Yasuo",
    name: " Nagata",
    firstName: "Cu",
    lastName: "Shu",
    position: "dr",
    status: "working",
    bill: true
  },
  {
    no: 3,
    code: "Yasuo",
    name: " Nagata",
    firstName: "Cu",
    lastName: "Shu",
    position: "dr",
    status: "working",
    bill: true
  }
]
class About extends Component {

  clickFunction = (val) => {
    console.log('123', val);
  }
  render() {
    return (
      <div>
        <ProjectTable projectTableData={data} clickFunction={(val) => this.clickFunction(val)}/>
      </div>
    );
  }
}

export default About;