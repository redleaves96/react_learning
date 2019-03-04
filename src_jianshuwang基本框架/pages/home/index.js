import React ,{ PureComponent } from 'react';//每个组件基本上都调用了connect方法和store连接，一个组件变化，所有组件都要重新调用render，性能较低，故使用PureComponent
import { connect } from 'react-redux';
import List from './components/List';
import Recommond from './components/Recommond';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { BackTop } from './style';

import { 
    HomeWrapper,
    HomeRight,
    HomeLeft
 } from './style';


class Home extends PureComponent {

    

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=''/>
                    <Topic />
                    <List />                                
                </HomeLeft>
                <HomeRight>
                    <Recommond />
                    <Writer />  
                </HomeRight>
                { this.props.showScoll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
                
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
    
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScoll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo()); 
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 500) {
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
      console.log();
    }
});

export default connect(mapState, mapDispatch)(Home);