import styled from "styled-components";



const Upload = styled.div`
min-height: 100px;
width: 50%;
border: 1px solid var(--background-darker);
border-radius: 0.5rem;
cursor: pointer;
background-color: var(--background-secondary);
color: white;
display: flex;
align-items: center;
justify-content: center;
`;

export default function () {


 return (
  <>
   <Upload>
    file.png
   </Upload>
  </>
 );
}
