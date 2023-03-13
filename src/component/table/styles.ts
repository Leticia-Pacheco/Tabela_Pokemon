import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Table = styled.table`
  width: 100vw;
  height: 100vh;

  tr:nth-child(odd) {
    background-color: var(--light);
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: var(--gray);
    text-align: center;
  }

  thead {
    tr {
      background-color: var(--primary) !important;
    }

    th {
      margin: 0px !important;
      min-width: 130px;
      padding: 10px;
  
      color: var(--light);
    }
  }
`;