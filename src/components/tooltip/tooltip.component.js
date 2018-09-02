import { h, Component } from 'preact';

import { TooltipWrapper, TooltipSpan } from './tooltip.style';

export class Tooltip extends Component {
  state = {
    open: false
  };

  toggleMouse = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { children, title } = this.props;
    const { open } = this.state;

    return (
      <TooltipWrapper
        onMouseEnter={this.toggleMouse}
        onMouseLeave={this.toggleMouse}
      >
        {open && <TooltipSpan>{title}</TooltipSpan>}
        {children}
      </TooltipWrapper>
    );
  }
}
