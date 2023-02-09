import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import {Link} from 'react-router-dom'
import logo from "../../assets/FullLogo.png";
import Connect from "./Connect";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <div display="flex">
        <img src={logo} alt="" width={"36%"} style={{ marginTop: -28 }} />
        <Typography variant="h3">
          GoldMinerz
        </Typography>
      </div>
      <Connect responsive={false} />
      <Typography variant="h6" marginTop={3}>
        STAKE USDT & EARN 1% DAILY AND WITHDRAW all your EARNINGS DAILY
      </Typography>
      {/* <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://luckycat.money/';
              }}
              >
                  Home
            </Button>
        </Grid>
      </ButtonContainer> */}
    </Wrapper>
  );
}
