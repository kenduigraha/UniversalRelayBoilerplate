// @flow

import { Card, CardHeader, CardText } from 'material-ui/Card'
import PropTypes from 'prop-types'
import React from 'react'
import Relay from 'react-relay'

import ResponsiveContentArea from '../../../../webapp/components/ResponsiveContentArea'

class Ensayo_PublicListing extends React.Component {
  _handle_onClick(id) {
    this.context.router.push('/ensayo/item/' + id)
  }

  renderEnsayos() {
    return this.props.Viewer.Ensayos.edges.map(edge =>
      <Card key={edge.node.id}>
        <CardHeader title={edge.node.Ensayo_Title} subtitle={edge.node.Ensayo_Description} />
        <CardText onClick={() => this._handle_onClick(edge.node.id)}>
          Click here to read!
        </CardText>
      </Card>,
    )
  }

  render() {
    return (
      <ResponsiveContentArea>
        {this.renderEnsayos()}
      </ResponsiveContentArea>
    )
  }
}

Ensayo_PublicListing.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default Relay.createContainer(Ensayo_PublicListing, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        Ensayos(first: 2147483647) {
          edges {
            node {
              id,
              Ensayo_Title,
              Ensayo_Description,
            },
          },
        },
      }
    `,
  },
})
