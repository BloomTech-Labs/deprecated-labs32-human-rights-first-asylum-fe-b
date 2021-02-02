import React from 'react';
import { Menu, Button } from 'antd';
import { DivStyled } from './Collections-styling';
import CollectionCard from './CollectionCard.js';
const { SubMenu } = Menu;

function Collections() {
  return (
    <DivStyled>
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
          Delete Collection
        </Button>
      </Menu>
    </DivStyled>
  );
}

export default Collections;
