import { Button, Grid, TextField, Typography, Link, Box, Avatar } from "@mui/material";
import { MdLockOutline as LockOutlinedIcon } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Register, Overlay } from "./components";
import { useLogin } from "./hooks/useLogin";
import { LoadingButton } from "@mui/lab";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3rem",
  },
  avatar: {
    backgroundColor: "#3b728c",
  },
  form: {
    width: "100%",
    marginTop: "1rem",
  },
  submit: {
    marginTop: "1rem",
  },
  cardLogin: {
    backgroundColor: "white",
    padding: "2rem",
  },
  shadow: {
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  }
};

function Copyright() {
  return (
    <Typography variant="body" color="textSecondary" align="center" >
      <strong>{`Copyright © ${new Date().getFullYear()} JhonS.`}</strong>
    </Typography>
  );
}

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const { user, loading, error, onLogin } = useLogin();
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin({ username, password });
  }

  const activateRightPanel = () => {
    setRightPanelActive(true);
  };

  const deactivateRightPanel = () => {
    setRightPanelActive(false);
  };

  useEffect(() => {
    if (user) {
      navigate('/home', { replace: true })
    }
  }, [user])


  return (<>
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <Register
        styles={styles}
        Copyright={Copyright}
      />
      {!isRightPanelActive && (
        <div className="form-container login-container">
          <div style={styles.root}>
            <Avatar style={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4" marginTop={2}>
              <strong>Log in</strong>
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                id="emailLogin"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
              />
              <TextField
                margin="normal"
                label="Password"
                required
                fullWidth
                type="password"
                id="passwordLogin"
                value={password}
                autoComplete="current-password"
                size="small"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <Typography color="error">{error}</Typography>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={styles.submit}
                sx={{
                  borderRadius: 4, backgroundColor: '#3b728c',
                  '&:hover': {
                    backgroundColor: '#3b728c',
                  }
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Grid container sx={{ padding: 2 }}>
                <Grid item xs>
                  <Link href="#" variant="body2" >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Box>
          </div>
        </div>
      )}
      <Overlay
        styles={styles}
        deactivateRightPanel={deactivateRightPanel}
        activateRightPanel={activateRightPanel}
      />
    </div>
  </>
  );
};
