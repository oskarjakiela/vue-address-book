<script>
/* eslint no-confusing-arrow: 0 */
import styled from 'vue-styled-components';

const buttonProps = {
  fullWidth: Boolean,
  sticky: Boolean,
};

export default styled('button', buttonProps)`
  position: ${props => props.sticky ? 'absolute' : 'static'};
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => props.fullWidth ? 'block' : 'inline-block'};
  border: 0;
  padding: 1rem 1.25rem;
  height: 3.5rem;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: #82d464;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;
</script>
