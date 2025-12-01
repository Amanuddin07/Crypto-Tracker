import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <MenuIcon className="link" />
      </Button>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer_div">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link to="/wishlist">
            <p className="link">Wishlist</p>
          </Link>
          <Link to="/dashboard">
            <Btn
              text={"Dashboard"}
              // onClick={() => console.log("Btn clicked")}
            />
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
