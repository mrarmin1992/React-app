import React, {Component} from 'react';     // layout- izgled stranice, tu ce biti toolbar, side draw itd itd 
import Aux from '../../hoc/Aux';
import classes from './Layout.css';   // Napravili smo css Layout i na ovaj nacin ga importujemo , classNAme = {classes. COntent } --> Nacin pozivanja Contenta iz Layout.css
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: true
    }
    SideDrawerCloseHandler = () => {
            this.setState({showSideDrawer: false});
    }
    sideDrawToggleHandler = () => {
            this.setState((prevState) => {
                return {showSideDrawer: !prevState.showSideDrawer};
            });
    }
    render() {
        return (
                <Aux>
                    <Toolbar  drawerToggleClicked={this.sideDrawToggleHandler} />
                    <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler} />
                                <main className={classes.Content}>                
                                {this.props.children}
                                </main>
                </Aux>
        )
    }

}

export default Layout; 