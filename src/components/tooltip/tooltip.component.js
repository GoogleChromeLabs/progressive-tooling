import { h, Component } from "preact";
import { withTheme } from "emotion-theming";

import { TooltipWrapper, TooltipSpan } from "./tooltip.style";

class TooltipComponent extends Component {
  state = {
    open: false
  };

  toggleMouse = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { children, title, pointing = "top left" } = this.props;
    const { open } = this.state;

    return (
      <TooltipWrapper
        onMouseEnter={this.toggleMouse}
        onMouseLeave={this.toggleMouse}
      >
        {open && <TooltipSpan pointing={pointing}>{title}</TooltipSpan>}
        {children}
      </TooltipWrapper>
    );
  }
}

export const Tooltip = withTheme(TooltipComponent);