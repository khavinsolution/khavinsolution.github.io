import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Container } from '@mui/material';

export default function CustomSeparator() {
    return (
        <Container sx={{ paddingTop: '5rem' }} >
            <Stack>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                    sx={{ paddingLeft: '1rem' }}
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