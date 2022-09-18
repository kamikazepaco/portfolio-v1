import { Link, LinkProps } from "@chakra-ui/react"
import { FiArrowUpRight } from 'react-icons/fi';

const ExternalLink = ( {children, ... linkProps }: LinkProps ) => {
    return (
        <Link {...linkProps} color='purple.500'>
            {children}
            <FiArrowUpRight />
        </Link>
    );
};

export default ExternalLink;