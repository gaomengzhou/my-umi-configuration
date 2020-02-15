
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import React from 'react';
import Router from 'umi/router';
import BizIcon from '../BizIcon';

const MenuBar = (props) => {
  const tabBarData = [
    {
      title: '首页',
      icon: 'shouye',
      selectedIcon: 'shouye',
      link: 'home',
    },
    {
      title: '分类',
      icon: 'fenlei',
      selectedIcon: 'fenlei',
      link: 'category',
    },
    {
      title: '购物车',
      icon: 'cart_icon',
      selectedIcon: 'cart_icon',
      link: 'shop',
    },
    {
      title: '我的',
      icon: 'wode',
      selectedIcon: 'wode',
      link: 'mine',
    },
  ];
  const {
    isMenuBar,
    children,
    pathname,
  } = props;
  return (
    <TabBar hidden={isMenuBar} tintColor={'#e93b3d'} tabBarPosition='bottom'>
      {tabBarData.map(({ title, icon, selectedIcon, link }) => {
        return (
          <TabBar.Item
            key={link}
            title={title}
            icon={<BizIcon type={icon} />}
            selectedIcon={<BizIcon type={selectedIcon} />}
            selected={pathname.split('/')[1] === link}
            onPress={() => Router.replace(`/${link}`)}
          >
            {pathname.split('/')[1] === link && children}
          </TabBar.Item>
        )
      })}
    </TabBar>
  );
}

MenuBar.defaultProps = {
  isMenuBar: false,
  children: null,
  pathname: '/',
};

MenuBar.propTypes = {
  isMenuBar: PropTypes.bool,
  children: PropTypes.node,
  pathname: PropTypes.string,
};

export default MenuBar;
