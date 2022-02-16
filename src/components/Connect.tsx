import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Grid, Container, Typography, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: `4em`,
        background: '#ECEEF1',
        minWidth: '100%',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
    },

    title: {
        textTransform: 'capitalize',
        fontFamily: 'Fira Sans',
    },
    bodym: {
        paddingBottom: '1rem',
    },
    form: {
        maxWidth: '50%',
    }

})
);

const data: any = {
    title: 'Want to stay connected? ',
    subtitle: 'Subscribe here to stay up-to-date on the technologies defining today and shaping tomorrow. ',
}

const ConnectForm = () => {
    const classes = useStyles();
    const validate = (values: any) => {
        const errors: any = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            // TODO: need to have API to send email
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container className={classes.root} >
            <div className={classes.wrapper}>
                <Grid className={classes.form}>
                    <Typography className={classes.title} align="left" variant="h4" color="primary">
                        {data.title}
                    </Typography>
                    <Typography className={classes.bodym} align="left" variant="subtitle1" color="textPrimary">
                        {data.subtitle}
                    </Typography>

                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    error={formik.errors.firstName ? true : false}
                                    value={formik.values.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    error={formik.errors.lastName ? true : false}
                                    value={formik.values.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    error={formik.errors.email ? true : false}
                                    value={formik.values.email}
                                    helperText={formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    error={formik.errors.phoneNumber ? true : false}
                                    value={formik.values.phoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    multiline
                                    fullWidth
                                    id="message"
                                    rows={4}
                                    label="Message"
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                />
                            </Grid>
                            <Grid item xs={10}>
                            </Grid>
                            <Grid item sm={12} xs={12} md={2}>
                                <Button color="primary" variant="contained" fullWidth type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>
        </Container>
    );
};

export default ConnectForm