/* eslint-disable react-hooks/rules-of-hooks */

import { connect } from 'dva';
import React, { useEffect, useState } from 'react';
import withRouter from 'umi/withRouter';
import MenuBar from '../components/MenuBar';
import styles from './index.css';



function BasicLayout(props) {
  console.log(props)
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
      setMenubar(true)
    }, [pathname])
  } else {
    useEffect(() => {
      setMenubar(false)
    }, [pathname])
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
