import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'black',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#fff',
    },
  },
});

function SignUp() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      // Simulate signup process
      setTimeout(() => {
        setSubmitting(false);
        toast.success('Signup successful!');
        console.log('Signup values:', values);
        navigate('/login'); // Redirect to login page after successful signup
      }, 1000);
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            border: '1px solid black',
            borderRadius: 1,
            padding: 4,
            width: '80%',
            maxWidth: 400,
            backgroundColor: '#fff',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: 'black', marginBottom: 2 }}>
            Sign up
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              autoComplete="off"
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              autoComplete="off"
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              margin="normal"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              autoComplete="off"
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              margin="normal"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Sign Up
            </Button>
            <Link
              href="/login"
              variant="body2"
              sx={{ color: 'black' }}
            >
              {"Already have an account? Sign In"}
            </Link>
          </form>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default SignUp;