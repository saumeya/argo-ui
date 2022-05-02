import * as React from 'react';

import './checkbox.scss';

export const Checkbox = (props: {value?: boolean; onChange?: (value: boolean) => void; id?: string; style?: React.CSSProperties | any}) => {
    const [value, setValue] = React.useState<boolean>(props.value);

    const syncValue = (val: boolean) => {
        setValue(val);
        if (props.onChange) {
            props.onChange(val);
        }
    };

    React.useEffect(() => {
        syncValue(props.value);
    }, [props.value]);

    return (
        <div
            id={props.id}
            className={`checkbox ${value ? 'checkbox--selected' : ''}`}
            onClick={(e) => {
                e.stopPropagation();
                syncValue(!value);
            }}
            style={props.style}>
            <i className='fa fa-check' />
        </div>
    );
};
