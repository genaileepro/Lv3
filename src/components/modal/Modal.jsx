import React, { useState } from 'react';
import { StAlignContainer, StTotalButton } from '../ProjectCss';
import DecoMdal from './ModalTools';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    return (
        <div>
            <div>
                <h1>Modal</h1>
                <StAlignContainer>
                    <StTotalButton
                        size="small"
                        $bordercolor="#45eb88"
                        $color="black"
                        onClick={() => setIsOpen(true)}
                    >
                        open modal
                    </StTotalButton>
                    <DecoMdal
                        modalType="first"
                        isOpen={isOpen}
                        onClick={() => setIsOpen(false)}
                    />

                    <StTotalButton
                        $bordercolor="rgb(250, 177, 160)"
                        $color="red"
                        size="large"
                        onClick={() => setIsOpen1(true)}
                    >
                        open modal
                    </StTotalButton>
                    <DecoMdal
                        modalType="second"
                        isOpen={isOpen1}
                        onClick={() => setIsOpen1(false)}
                    />
                </StAlignContainer>
            </div>
        </div>
    );
};

export default Modal;
