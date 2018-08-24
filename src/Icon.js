import React from 'react';
import classnames from 'classnames';
import icons from './icons';
import {_bind} from './utils';

export default class Icon extends React.Component {
  static displayName = 'ReduxToastrIcon';

  static defaultProps = {
    size: 32
  };

  constructor(props) {
    super(props);

    _bind(
      [
        'returnDefs'
      ],
      this
    );
  }

  returnDefs(props) {
    switch (props) {
      case 'success':
        return (
          <defs>
             <circle id="path-1" cx="9" cy="9" r="9"></circle>
             <polygon id="path-3" points="3.92693696 5.84679653 7.60389222 2.16984127 8.73526307 3.30121212 3.92693696 8.10953823 0.831388033 5.0139893 1.96275888 3.88261845"></polygon>
         </defs>
        );
      case 'error':
        return (
          <defs>
              <path d="M9.9068995,16.9392145 C9.80877447,17.1354646 9.64964429,17.2945948 9.45339422,17.3927198 C8.95246611,17.6431838 8.34334241,17.4401426 8.09287836,16.9392145 L0.607058076,1.96757393 C0.536653604,1.82676499 0.5,1.67149783 0.5,1.51406865 C0.5,0.954013998 0.954013998,0.5 1.51406865,0.5 L16.4857092,0.5 C16.6431384,0.5 16.7984056,0.536653604 16.9392145,0.607058076 C17.4401426,0.857522129 17.6431838,1.46664583 17.3927198,1.96757393 L9.9068995,16.9392145 Z" id="path-1"></path>
          </defs>
        );
      default:
        return;
    }
  }

  render() {
    const {size} = this.props;
    const styles = {
      width: size,
      height: size
    };
    return (
      <svg
        className={classnames(this.props.className, 'toastr-icon')}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox={`0 0 ${this.props.size} ${this.props.size}`}
        style={styles}
      >
        {this.returnDefs(this.props.name)}
        {icons(this.props.name)}
      </svg>
    );
  }
}
