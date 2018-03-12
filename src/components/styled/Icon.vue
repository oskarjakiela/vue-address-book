<script>
/* eslint no-confusing-arrow: 0 */
import styled from 'vue-styled-components';

const iconProps = {
  size: String,
};

export default styled('div', iconProps)`
  > svg {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    display: block;
  }
`;
</script>
