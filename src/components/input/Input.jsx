import React, { useState } from 'react';
import { StInput, StInputContainer, StTotalButton } from '../ProjectCss';

const Input = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onChangeNameBtHd = (event) => {
        setName(event.target.value);
    };

    // const onChangePrice = (event) => {
    //     const e = +event.target.value.split(',').join('');
    //     return isNaN(e) ? null : setPrice(e);
    // };

    const onChangePrice = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, ''); // 숫자만 남기기
        setPrice(numericValue);
    };

    const formatPrice = (value) => {
        const parts = [];
        for (let i = value.length; i > 0; i -= 3) {
            parts.unshift(value.slice(Math.max(0, i - 3), i));
        }
        return parts.join(',');
    };

    const onClickSaveButtonHandler = () => {
        name.trim() === '' && price.trim() === ''
            ? alert('Please enter both name and price.')
            : alert(`name : ${name} price:${price}`);
    };

    return (
        <div>
            <h1>Input</h1>
            <StInputContainer>
                <div>
                    Name
                    <StInput
                        type="text"
                        value={name}
                        onChange={onChangeNameBtHd}
                    />
                </div>
                <div>
                    price
                    {/* <StInput
                        type="text"
                        value={price.toLocaleString()}
                        onChange={onChangePrice}
                    /> */}
                    <StInput
                        type="text"
                        value={formatPrice(price)}
                        onChange={onChangePrice}
                        placeholder="0"
                    />
                </div>
                <StTotalButton
                    $bordercolor="#45eb88"
                    $color="black"
                    size="small"
                    onClick={onClickSaveButtonHandler}
                >
                    Save
                </StTotalButton>
            </StInputContainer>
        </div>
    );
};

export default Input;
