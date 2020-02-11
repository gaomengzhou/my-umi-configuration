import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import MenuBar from '../components/MenuBar';
import styles from './index.css';

function BasicLayout(props) {
  const { children, location } = props;
  console.log(props)
  let isMenubar = false;
  if (
    location.pathname !== '/home'
    && location.pathname !== '/shop'
    && location.pathname !== '/mine'
    && location.pathname !== '/category'
  ) {
    isMenubar = true
  } else {
    isMenubar = false
  }
  return (
    <div className={styles.normal}>
      {
        isMenubar
          ? children
          : <MenuBar pathname={location.pathname} isMenubar={isMenubar}>{children}</MenuBar>
      }
    </div>
  );
}

export default withRouter(connect()(BasicLayout));
