import React, { ComponentPropsWithoutRef } from 'react';

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({name, value, type, placeholder, onChange, ...props}:TextFieldProps): JSX.Element => {
    return (
        <div>
            <input
            name = { name }
            value = { value }
            type = { type }
            placeholder = { placeholder }
            onChange = { onChange }
            {...props}
            />
        </div>
    );
};

export default TextField;
