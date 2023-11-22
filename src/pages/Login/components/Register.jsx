import { Button, TextField, Typography, Box, Avatar } from "@mui/material";
import { MdOutlineAppRegistration as LockOutlinedIcon } from "react-icons/md";

export const Register = ({styles, Copyright}) => {
 
  return (<>
                <div className="form-container register-container">
                    <div style={styles.root}>
                        <Avatar style={styles.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h4"  marginTop={2}>
                            <strong>Sign Up</strong>
                        </Typography>
                        <form style={styles.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            fullWidth
                            id="emailRegister"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="passwordRegister"
                            autoComplete="current-password"
                            />
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={styles.submit}
                            sx={{borderRadius: 4, backgroundColor: '#3b728c',
                            '&:hover': {
                                backgroundColor: '#3b728c', 
                            }}}
                            >
                            Register
                            </Button>
                            <Box mt={5}>
                            <Copyright />
                            </Box>
                        </form>
                    </div>
                </div>
        </>
    );
};
