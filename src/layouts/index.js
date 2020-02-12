/* eslint-disable react-hooks/rules-of-hooks */
import { connect } from 'dva';
import React, { useEffect, useState } from 'react';
import withRouter from 'umi/withRouter';
import MenuBar from '../components/MenuBar';
import styles from './index.css';

const BasicLayout = (props) => {
  const [isMenubar, setMenubar] = useState(false)
  const {
    children,
    location: {
      pathname
    }
  } = props;
  const reg = /^(\/home|\/shop|\/mine|\/category|\/home\/|\/shop\/|\/mine\/|\/category\/)$/
  if (!reg.test(pathname)) {
    useEffect(() => {
      // 这里返回一个函数可以执行Effect清除功能,可以看做componentWillUnmount()
      return (() => {
        if (!isMenubar) {
          setMenubar(true)
        }
      })()
    }, [isMenubar, pathname])
  } else {
    useEffect(() => {
      // 这里返回一个函数可以执行Effect清除功能,可以看做componentWillUnmount()
      return (() => {
        if (isMenubar) {
          setMenubar(false)
        }
      })()
    }, [isMenubar, pathname])
  }
  return (
    <div className={styles.normal}>
      {
        isMenubar
          ? children
          : <MenuBar pathname={pathname} isMenubar={isMenubar}>{children}</MenuBar>
      }
    </div>
  );
}

export default withRouter(connect()(BasicLayout));
