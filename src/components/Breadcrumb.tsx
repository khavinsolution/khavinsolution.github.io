import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Container } from '@mui/material';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
    return (
        <Container sx={{ paddingTop: '6rem' }} >
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {window.location.pathname.split('/').map(path => {
                        return (
                            path ? <Link underline="hover" key="1" color="inherit" href={'/' + path}>
                                {path}
                            </Link> : <Link underline="hover" key="1" color="inherit" href="/">
                                Home
                            </Link>
                        )
                    })}
                </Breadcrumbs>
            </Stack>
        </Container >
    );
}