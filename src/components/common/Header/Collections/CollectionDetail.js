import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DivStyled } from './Collections-styling';

const { SubMenu } = Menu;

const CollectionDetail = props => {
  return (
    <DivStyled>
      <Menu>
        <SubMenu title="Collection Detail">
          <Menu.Item>Sample Case 5</Menu.Item>
          <Menu.Item>Sample Case 6</Menu.Item>
        </SubMenu>
        <SubMenu title="Collection Detail">
          <Menu.Item>Sample Case 5</Menu.Item>
          <Menu.Item>Sample Case 6</Menu.Item>
        </SubMenu>
      </Menu>
    </DivStyled>
    // LINKS FOR INDIVIDUAL CASE DATA WITHIN THE COLLECTIONS ONCE BE ENDPOINT RECEIVED
    // <Menu.Item>
    //   <Button type="link"> {props.collection.name} </Button>
    // </Menu.Item>
  );
};
export default CollectionDetail;
