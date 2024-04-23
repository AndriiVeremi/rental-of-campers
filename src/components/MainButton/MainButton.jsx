import { Button } from "./MainButton.styled";

const MainButton = ({children, size, type, onClick}) => {

    return (
        <Button type={type} size={size} onClick={onClick}>{children}</Button>
    )
};

export default MainButton;
