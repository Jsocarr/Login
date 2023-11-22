import { Button, Typography} from "@mui/material";
import { MdEast as ArrowLeft, MdWest as ArrowRight } from "react-icons/md";

export const Overlay = ({styles, deactivateRightPanel, activateRightPanel}) => {
 
  return (<>
               <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <Typography component= "h1" variant="h3" style={styles.shadow}> Hello Friends</Typography>
                            <p>if Yout have an account, login here and have fun</p>
                            <Button
                            className="ghost" 
                            id="login"
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={styles.submit}
                            sx={{borderRadius: 4,
                                '&:hover': {
                                    backgroundColor: 'transparent', 
                                },}}
                            onClick={deactivateRightPanel}
                            >
                                Login
                                <ArrowRight/>
                            </Button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <Typography component= "h1" variant="h3" style={styles.shadow}>Start your experience now</Typography>
                            <p>if you don't have an account yet, join us and start your experience.</p>
                            <Button
                            className="ghost" 
                            id="register"
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={styles.submit}
                            sx={{
                                borderRadius: 4,
                                '&:hover': {
                                    backgroundColor: 'transparent', 
                                },}}
                            onClick={activateRightPanel}
                            >
                                Register
                                <ArrowLeft/>
                            </Button>
                        </div>
                    </div>
                </div>
        </>
    );
};
