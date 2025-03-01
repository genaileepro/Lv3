import styled, { css } from 'styled-components';

export const StAlignContainer = styled.div`
    align-items: baseline;
    gap: 30px;
`;

export const StTotalButton = styled.button`
    border: 3px solid ${(props) => props.$bordercolor};
    color: ${(props) => props.$color};
    border-radius: 8px;
    margin-right: 25px;
    cursor: pointer;
    &:active {
        background-color: #eeeeee;
    }
    ${({ size }) => {
        switch (size) {
            case 'large':
                return css`
                    height: 50px;
                    width: 200px;
                    font-weight: bolder;
                    background-color: #ffffff;
                    margin-bottom: 10px;
                `;
            case 'medium':
                return css`
                    height: 45px;
                    width: 150px;
                    font-weight: bold;
                    background-color: ${(props) => props.$bordercolor};
                `;
            case 'small':
                return css`
                    height: 35px;
                    width: 100px;
                    font-weight: bold;
                    background-color: ${(props) => props.$bordercolor};
                `;
            default:
                return null;
        }
    }};
`;

export const StInputContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: baseline;
`;

export const StInput = styled.input`
    border-radius: 10px;
    height: 30px;
    margin-left: 10px;
`;

export const StUnderContainer = styled.div`
    border: 3px solid rgb(221, 221, 221);
    margin-top: 50px;
    height: 200px;
`;
