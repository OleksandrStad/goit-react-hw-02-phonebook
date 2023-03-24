import React from "react";
import { FilterInput, FilterLabel } from './Filter.styled'

export const Filter = ({ value, onChange }) => (
    < FilterLabel htmlFor="" >
        Find contacts by name
        <FilterInput type="text" value={value}
            onChange={onChange} />
    </FilterLabel >
)
