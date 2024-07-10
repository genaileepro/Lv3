import styled, { css } from 'styled-components';

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
    gap: 5px;
`;

export const StInput = styled.input`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const StUnderContainer = styled.div`
    border: 3px solid rgb(221, 221, 221);
    margin-top: 50px;
    height: 200px;
`;
