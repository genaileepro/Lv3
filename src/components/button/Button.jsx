import React from 'react';
import { StAlignContainer, StTotalButton } from '../ProjectCss';

const Button = () => {
    return (
        <div>
            <h1>Button</h1>
            <div>
                <StAlignContainer>
                    <StTotalButton
                        $bordercolor="#45eb88"
                        $color="#000000"
                        onClick={() => {
                            alert(`Make Buttons`);
                        }}
                        size="large"
                    >
                        LargePrimaryButton
                    </StTotalButton>
                    <StTotalButton
                        $bordercolor="#45eb88"
                        $color="#000000"
                        size="medium"
                    >
                        Medium
                    </StTotalButton>
                    <StTotalButton
                        $bordercolor="#45eb88"
                        $color="black"
                        size="small"
                    >
                        Small
                    </StTotalButton>
                </StAlignContainer>
                <div>
                    <StTotalButton
                        onClick={() =>
                            console.log(window.prompt(`is it hard?`))
                        }
                        $bordercolor="rgb(250, 177, 160)"
                        $color="red"
                        size="large"
                    >
                        LargeNegativeButton
                    </StTotalButton>
                    <StTotalButton
                        size="medium"
                        $bordercolor="rgb(250, 177, 160)"
                        $color="red"
                    >
                        Medium
                    </StTotalButton>
                    <StTotalButton
                        size="small"
                        $bordercolor="rgb(250, 177, 160)"
                        $color="red"
                    >
                        Small
                    </StTotalButton>
                </div>
            </div>
        </div>
    );
};

export default Button;
