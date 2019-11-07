import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';


function ProjectTable(props) {
  const { projectTableData, clickFunction } = props;
  let content;

  if(projectTableData) {
    content = projectTableData.map(item => 
      <Table.Row onClick={clickFunction.bind(this, item.no)}>
        <Table.Cell></Table.Cell>
        <Table.Cell>{item.no}</Table.Cell>
        <Table.Cell>{item.code}</Table.Cell>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.firstName}</Table.Cell>
        <Table.Cell>{item.lastName}</Table.Cell>
        <Table.Cell>{item.position}</Table.Cell>
        <Table.Cell>{item.status}</Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>No</Table.HeaderCell>
        <Table.HeaderCell>Employee Code</Table.HeaderCell>
        <Table.HeaderCell>Nick Name</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Position</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    {content}
    </Table>
  );
}

export default ProjectTable