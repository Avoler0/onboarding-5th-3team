import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
  font-family: Arial, Helvetica, sans-serif !important;
   box-sizing:border-box;
   outline:none;
   border:none;
 }
`;

export default GlobalStyles;
