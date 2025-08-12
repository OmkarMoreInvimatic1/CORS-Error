import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'black', // Set label color to black
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'black', // Set input text color to black
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white', // Set button text color to white
        },
      },
    },
  },
  palette: {
    background: {
      default: '#fff', // Set background color to white
    },
  },
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      // Simulate an API call or authentication process
      setTimeout(() => {
        setSubmitting(false);
        if (values.email === 'admin@gmail.com' && values.password === 'admin@123') {
          toast.success('Login successful!');
          // You would typically redirect the user to another page here
          console.log('Login successful!');
        } else {
          toast.error('Invalid credentials');
          console.log('Login failed');
        }
      }, 1000); // Simulate a 1-second delay
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
          minHeight: '100vh', // Ensure the container takes up the full viewport height
          justifyContent: 'center', // Center vertically
        }}
      >
        <Box
          sx={{
            border: '1px solid black',
            borderRadius: 1,
            padding: 4,
            width: '80%', // Changed to 80% for full width
            maxWidth: 400, // Optional: set a max-width
            backgroundColor: '#fff',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: 'black', marginBottom: 2 }}>
            Sign in
          </Typography>
          <form onSubmit={formik.handleSubmit}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default Login;