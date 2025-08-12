import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material'; // Import Link
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
    onSubmit: async (values, { setSubmitting }) => { // Make onSubmit async
      setSubmitting(true); // Disable the button immediately

      try {
        const payload = {
          email: values.email,
          password: values.password,
        };

        const response = await fetch('http://localhost:5148/api/Auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json(); // Await the response.json() call

        if (response.ok) { // Check response.ok
          toast.success('Login successful!');
          console.log('Login successful!');
          navigate('/homepage');
        } else {
          toast.error(`Login failed: ${data.message || 'An error occurred'}`);
          console.error('Login failed:', data);
        }
      } catch (error) {
        toast.error('Login failed: Network error');
        console.error('Login failed:', error);
      } finally {
        setSubmitting(false); // Re-enable the button
      }
    },
  });

  const navigate = useNavigate(); // Initialize useNavigate

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
            <Link
              href="/signup" // Replace with your signup route
              variant="body2"
              sx={{ color: 'black' }}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </form>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default Login;