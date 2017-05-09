// @flow
/* eslint react/prop-types: 0 */

import Drawer from 'material-ui/Drawer'
import { spacing, typography, zIndex } from 'material-ui/styles'
import React from 'react'
import Relay from 'react-relay'

import { NavMenuTitle } from '../../configuration/webapp/components/ChromeSettings'
import NavMenu from '../../configuration/webapp/components/NavMenu'


class AppNavDrawer extends React.Component {

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  }

  _handle_onTouchTap_Drawer = () => {

    this.context.router.push( '/' )
    this.props.onRequestChangeNavDrawer( false )
  }

  render() {

    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props

    const drawerContainerStyle = {
      zIndex: zIndex.drawer - 100,
      backgroundColor: this.context.muiTheme.rawTheme.palette.backCanvas.viewportBackgroundColor,

    }

    // If we do not want box shadow, override mui Drawer setting
    if(!this.context.muiTheme.rawTheme.palette.backCanvas.navDrawerBoxShadow)
    drawerContainerStyle.boxShadow = 0

    return(
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={ onRequestChangeNavDrawer }
        containerStyle={ drawerContainerStyle }
      >
        <div
          style={ {
            cursor: 'pointer',
            fontSize: 24,
            color: typography.textFullWhite,
            lineHeight: `${spacing.desktopKeylineIncrement}px`,
            fontWeight: typography.fontWeightLight,
            backgroundColor: this.context.muiTheme.palette.primary1Color,
            paddingLeft: spacing.desktopGutter,
            marginBottom: 8,
          } }
          onTouchTap={ this._handle_onTouchTap_Drawer }
        >
          { NavMenuTitle }
        </div>
        <NavMenu
          Viewer={ this.props.Viewer }
          value={ location.pathname }
          onChange={ onChangeList }
        />
      </Drawer>
    )
  }
}


export default Relay.createContainer( AppNavDrawer, {
  fragments: {
    Viewer: () => Relay.QL `
      fragment on Viewer {
        ${ NavMenu.getFragment( 'Viewer' ) },
      }
    `,
  },
} )
