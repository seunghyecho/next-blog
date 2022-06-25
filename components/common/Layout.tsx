import styled from "styled-components";

const CreateLayout = styled.div`
  margin: 0 auto;
`;

function Layout({ children }) {
  return <CreateLayout>{children}</CreateLayout>;
}
export default Layout;