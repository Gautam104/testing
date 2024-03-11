import { Box, Typography, FormControl, Snackbar, SnackbarContent } from '@mui/material'
import './style.css'
import { useState } from 'react'
import { StyledTextField, StyledBox, StyledInputLabel, StyledButton } from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false); 
    const [message, setMessage] = useState('');

    const navigate = useNavigate()

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }


    const handleLogin = async () => {
        if (!username.trim()) {
            setOpen(true); 
            setMessage('Username is required!');
        } else if (!/^[A-Z]/.test(username.trim())) {
            setOpen(true); 
            setMessage('Username must start with a capital letter!!');
        }
        else if (!password.trim() || !/.{8,}/.test(password.trim())) {
            setOpen(true); 
            setMessage('Password is required and must be at least 8 characters long!!');
        } else
        {
            await axios
            .post('http://localhost:5000', { username, password })
            .then((response) => {
                console.log('Login response:', response.data);
                navigate('/Home');  
            })
            .catch((error) => {
                setOpen(true);
                setMessage('Failed to login. Please try again.');
                console.error('Login error:', error);
            });
        }
    };


    return (
        <StyledBox>
            <div>
                <Box sx={{ width: '620px', height: '400px', textAlign: 'center', paddingTop: '50px', marginLeft: '230px' }}>

                    <Typography component="h1" variant="h4" sx={{
                        color: '#535353',
                        fontWeight: '900',
                        fontSize: '30px',
                        fontFamily: '"Vazirmatn", sans-serif',
                        marginLeft: '282px'
                    }}>
                        LOG IN
                    </Typography>

                    <Typography component="h1" variant='h6' sx={{
                        color: '#535353',
                        fontWeight: '600',
                        fontFamily: '"Gilroy-Regular",sans-serif',
                        marginLeft: '280px',
                    }}>
                        To access the dashboard
                    </Typography>

                    <FormControl>
                        <Box sx={{
                            boxShadow: '0px 4px 43px rgba(0, 0, 0, 0.08)',
                            background: '#ffffff',
                            height: '400px',
                            width: '400px',
                            marginLeft: '250px',
                            marginTop: '18px',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>

                            <StyledInputLabel htmlFor="my-input">Username</StyledInputLabel>

                            <StyledTextField id="username-input"
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={handleChangeUsername} />

                            <StyledInputLabel htmlFor="password">Password</StyledInputLabel>

                            <StyledTextField id="password-input"
                                type="password"
                                label="Password"
                                variant="outlined"
                                value={password}
                                onChange={handleChangePassword} />

                            <StyledButton variant="contained" type='submit' sx={{
                                '&:hover': {
                                    backgroundColor: 'black',
                                },
                            }}
                                onClick={handleLogin}
                            >
                                LOGIN
                            </StyledButton>
                        </Box>
                    </FormControl>

                    {/* Snackbar for displaying error messages */}
                    <Snackbar anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                        open={open}
                        autoHideDuration={4000}
                        onClose={() => setOpen(false)} // Changed variable name to lowercase
                    >
                        <SnackbarContent message={message}
                            style={{ backgroundColor: 'red' }}
                        />
                    </Snackbar>
                </Box>
            </div>
        </StyledBox>
    )
}

export default Login
