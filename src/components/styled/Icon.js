/* eslint no-confusing-arrow: 0 */
import styled from 'vue-styled-components';

const iconProps = {
  clickable: Boolean,
  size: String,
};

export default styled('div', iconProps)`
  cursor: ${props => props.clickable ? 'pointer' : 'auto'};

  > svg {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    display: block;
  }
`;
