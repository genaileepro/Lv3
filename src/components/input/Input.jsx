import React, { useState } from 'react';
import { StInput, StInputContainer, StTotalButton } from '../ProjectCss';

const PriceFormatInput = ({ getValues }) => {
    const [value, setValue] = useState({
        raw: "0",
        format: "0",
    });

    const onChageHandler = ({ target }) => {
        const rex = /\D/g;

        const raw = target.value.replaceAll(",", "");
        const format = new Intl.NumberFormat().format(
            target.value.replaceAll(",", "")
        );

        if (!rex.test(target.value.replaceAll(",", ""))) {
            setValue((old) => ({
                ...old,
                raw,
                format,
            }));

            getValues && getValues({ raw, format });
        }
    };

    return (
        <StInput 
            type="text"
            value={value.format}
            onChange={onChageHandler}
        />
    );
};

const Input = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState({ raw: "0", format: "0" });

    const onChangeNameBtHd = (event) => {
        setName(event.target.value);
    };

    const onChangePrice = ({ raw, format }) => {
        setPrice({ raw, format });
    };

    const onClickSaveButtonHandler = () => {
        name.trim() === '' || price.raw.trim() === ''
            ? alert('Please enter both name and price.')
            : alert(`name : ${name} price:${price.raw}`);
    };

    return (
        <div>
            <h1>Input</h1>
            <StInputContainer>
                <div>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={onChangeNameBtHd}
                    ></input>
                </div>
                <div>
                    price
                    <PriceFormatInput getValues={onChangePrice} />
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
