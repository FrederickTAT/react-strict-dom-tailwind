import { tailwindStyles } from './tailwind.styles';
import { dynamicStyles } from './customStyles';

export const styles = {
    ...tailwindStyles,
    ...dynamicStyles
}

export {
    tailwindStyles,
    dynamicStyles
}