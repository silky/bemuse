
import './UnofficialPanel.scss'
import React from 'react'
import Panel from 'bemuse/ui/Panel'
import OptionsButton from './OptionsButton'

export default React.createClass({
  render () {
    return <div className="UnofficialPanel">
      <Panel title="Unofficial Music Server">
        <div className="UnofficialPanelのcontent">
          <p>
            You are now playing in an <strong>unofficial music server</strong>.
            This music server is not maintained or endorsed by Bemuse or
            Bemuse’s developers.
          </p>
          <p className="UnofficialPanelのbuttons">
            <OptionsButton onClick={this.props.onClose}>Close</OptionsButton>
          </p>
        </div>
      </Panel>
    </div>
  }
})
