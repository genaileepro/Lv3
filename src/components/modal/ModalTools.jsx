import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

const DecoModal = ({ isOpen, onClick, modalType }) => {
    console.log(modalType);
    const getModalContent = () => {
        switch (modalType) {
            case 'first':
                return (
                    <ModalContent $bgColor="#646cffaa">
                        <div>
                            <div>아 모달창 너무 어렵다</div>
                            <footer>
                                <CloseButton onClick={onClick}>
                                    닫기
                                </CloseButton>
                            </footer>
                        </div>
                    </ModalContent>
                );
            case 'second':
                return (
                    <ModalContent $bgColor="#ff6347aa">
                        <div>
                            <div>두 번째 모달입니다</div>
                        </div>
                    </ModalContent>
                );
            default:
                return null;
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={modalType === 'first' ? () => {} : onClick}
            //click 했을때 기능 modal type 에따라  first 면 아무기능 동작안함 first가 아닐때 바깥 클릭하면 onClick 실행
            style={customModalStyles}
        >
            {getModalContent()}
        </Modal>
    );
};

export default DecoModal;

const ModalContent = styled.div`
    background-color: ${(props) => props.$bgColor};
    color: #fff;
    border: none;
    border-radius: 8px;
    max-width: 400px;
    max-height: 350px;
    margin: auto;
    padding: 20px;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
`;

const customModalStyles = {
    content: {
        border: 'none',
        borderRadius: '8px',
        maxWidth: '400px',
        maxHeight: '350px',
        margin: 'auto',
        padding: '20px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};
