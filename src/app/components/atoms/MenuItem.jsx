import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.li`
  height: 100%;
  min-width: 60px;
  border-top: 10px solid #eff1f2;
  padding-top: 15px;
  cursor: pointer;
  margin: 0 10px;

  ${(props) => props.customStyle};
`;

const Item = styled.a`
  margin: 0 16px;
  height: 65px;
  min-width: 60px;
  line-height: 40px;
  font-size: 14px;
`;

const MenuItem = ({ name, selectedItem, selectMenuItem }) => (
  <ItemWrapper
    customStyle={selectedItem === name ? { borderTop: '10px solid #e4613b' } : null}
    onClick={(e) => {
      selectMenuItem(name);
    }}
  >
    <Item>{name}</Item>
  </ItemWrapper>
);

export default MenuItem;
