import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MenuItem from '../atoms/MenuItem';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const List = styled.ul`
	margin 0px 20% 0px calc(20% - 61px);
	height: 100%;
	display: flex;
`;

const renderItems = (items, selectedItem, selectMenuItem) => {
  return items.map((item) => (
    <MenuItem name={item} selectedItem={selectedItem} selectMenuItem={selectMenuItem} key={item} />
  ));
};

const Menu = ({ items, selectedItem, selectMenuItem }) => (
  <Container>
    <List>{renderItems(items, selectedItem, selectMenuItem)}</List>
  </Container>
);

Menu.propTypes = {
  items: PropTypes.array,
  selectedItem: PropTypes.string,
  selectItem: PropTypes.func,
};

Menu.defaultProps = {
  items: ['Instructions', 'Solution', 'Calculator'],
  selectedItem: 'Instructions',
  selectItem: () => console.log('click'),
};

export default Menu;
