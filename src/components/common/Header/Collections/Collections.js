import React from 'react';
// import ReactDOM from 'react-dom';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { DivStyled } from './Collections-styling';

import CollectionCard from './CollectionCard.js';

const { SubMenu } = Menu;

const menu = (
  /* All menu items need to be replaced with the output mapped data 
  and necessary logic to create new instances of menu items. 
  Part of this logic is currently held in "Collection Card" */
  <Menu>
    <SubMenu title="Nice List">
      <Menu.Item>Sample Case 1</Menu.Item>
      <Menu.Item>Sample Case 2</Menu.Item>
    </SubMenu>
    <SubMenu title="Naughty List">
      <Menu.Item>Sample Case 3</Menu.Item>
      <Menu.Item>Sample Case 4</Menu.Item>
    </SubMenu>
    <SubMenu title="Friendly Friends">
      <Menu.Item>Sample Case 5</Menu.Item>
      <Menu.Item>Sample Case 6</Menu.Item>
    </SubMenu>

    <CollectionCard />

    <Button
      type="link"
      // onClick={e => "send to edit collections component (post functinoality"}
      //onclick listener with post request to be added here once we know more about the data
    >
      Add Collection
    </Button>
    <Button
      type="link"
      // onClick={e => "send to edit collections component (delete functinoality"}
      //onclick listener with post request to be added here once we know more about the data
    >
      Delete Collections
    </Button>
  </Menu>
);

function Collections() {
  return (
    <DivStyled>
      <Dropdown overlay={menu} style={{ padding: '10px' }}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Collections <DownOutlined />
        </a>
      </Dropdown>
    </DivStyled>
  );
}

export default Collections;
