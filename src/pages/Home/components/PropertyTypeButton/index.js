import { PropertyTypeButtonWrapper } from "./styles";
import { IoAmericanFootballOutline } from 'react-icons/io5';

export const PropertyTypeButton = ({ label }) => (
    <PropertyTypeButtonWrapper>
        <IoAmericanFootballOutline />
        <p>{label}</p>
    </PropertyTypeButtonWrapper>
)