import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'


const theme = extendTheme({
    components: {
        Heading:{
            baseStyle: (props) => ({
                color: mode('gray.700', 'white')(props),
            }),
        },
        Text: {
            baseStyle: (props) =>  ({
                color: mode('gray.700', 'white')(props),
            }),
        },
    },
    fonts: {
        heading: `Poppins, ${base.fonts.heading}`,
        body: `Inter, ${base.fonts.body}`
    }
});

export default theme;
