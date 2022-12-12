import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
padding: ${p=>p.theme.space[4]}px ${p =>p.theme.space[2]}px;
width: ${p => p.theme.space[8]}px;
border:${p => p.theme.borders.normal};
border-radius:${p => p.theme.radii.md};
background-color:${p => p.theme.colors.backgroundSecondary}
`;
export const Title = styled.h2`
margin-bottom:${p => p.theme.space[3]}px;
text-align:center;
`;
export const ButtonGroup = styled.div`
display:flex;
gap:8px;
`;
export const Button = styled.button`
margin:${p=>p.theme.space[0]}px;
padding:${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
background-color:${p => p.theme.colors.primary};
color:${p => p.theme.colors.white};
font-weight: 500;
border:${p => p.theme.borders.none};
border-radius:${p => p.theme.radii.md};
cursor:pointer;
transition: transform 250ms linear , background-color 250ms linear;

:first-child{
    margin-left:auto;
};
:last-child{
    margin-right:auto;
};

:hover{
    transform:scale(1.1);
    background-color:${p => p.theme.colors.accent};
}
`;
export const StatisticsPercentage = styled.li`
color:${p => p.children[1] >= 50 ? p.theme.colors.green : p.theme.colors.red}}
`;