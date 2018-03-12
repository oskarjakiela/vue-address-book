<script>
/* eslint no-confusing-arrow: 0 */
import styled from 'vue-styled-components';

const inputProps = {
  large: Boolean,
};

export default styled('input', inputProps)`
  margin-left: -.625rem;
  border: 2px solid #b8b8b8;
  padding: ${props => props.large ? '1.375' : '.5'}rem;
  height: ${props => props.large ? '5.375' : '3'}rem;
  width: 100%;
  font-size: ${props => props.large ? '4.5' : '1.5'}rem;
  font-weight: bold;
  color: #b3b3b3;

  &:focus {
    outline: 0;
  }
`;
</script>
