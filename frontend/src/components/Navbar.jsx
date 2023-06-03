import { Button, Input, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import * as React from "react";
import {
  FlexBox,
  Hoverable,
  primaryDarker,
  primaryLight,
  primaryMain,
} from "../utils/generalStyles";
import { useNavigate } from "react-router-dom";
import logo from "../assets/flushed_burger.png";
import { OrangeButton } from "./OrangeButton";
import { storage } from "../utils/storage";
import { parseJSON } from "../utils/helpers";

export const NAVBAR_HEIGHT = "55px";

const navbarStyle = {
  height: NAVBAR_HEIGHT,
  width: "100%",
  position: "fixed",
  top: "0",
  bgcolor: primaryMain,
  alignItems: "center",
  padding: "0 20px",
  zIndex: "3",
  boxShadow: "sm",
  display: "flex",
  justifyContent: "space-between",
};

const Navbar = () => {
  const navigate = useNavigate();
  const [openExportModal, setOpenExportModal] = React.useState(false);
  const [openImportModal, setOpenImportModal] = React.useState(false);

  const [exportName, setExportName] = React.useState("");

  const homeButtonHandler = () => {
    navigate("/");
  };

  const downloadJson = (e) => {
    e.preventDefault();

    const downloadEle = document.createElement("a");
    const file = new Blob([JSON.stringify(storage.load())], {
      type: "text/plain",
    });
    const fileName = exportName + ".json";

    downloadEle.href = URL.createObjectURL(file);
    downloadEle.download = fileName;
    downloadEle.click();
    handleExportClose();
  };

  const updateExportName = (e) => {
    setExportName(e?.target.value.replace(/ /g, "_"));
  };

  const handleExportClose = () => {
    setExportName("");
    setOpenExportModal(false);
  };

  const constructUploadedFile = (e) => {
    const upload = e.target.files;
    if (!upload || upload.length < 1) return;
    if (!upload[0]) return;
    parseJSON(upload[0]).then((data) => {
      Object.keys(data).forEach((key) => {
        storage.setRes(data[key]);
      });
    });
    setOpenImportModal(false);
  };

  return (
    <>
      <Modal open={openExportModal} onClose={handleExportClose}>
        <ModalDialog>
          <Stack spacing="10px">
            <Typography component="h2">Export</Typography>
            <Input
              required
              value={exportName}
              onChange={updateExportName}
              placeholder="Enter filename"
            />
            <form onSubmit={downloadJson}>
              <OrangeButton type="submit">Download</OrangeButton>
            </form>
          </Stack>
        </ModalDialog>
      </Modal>

      <Modal open={openImportModal} onClose={() => setOpenImportModal(false)}>
        <ModalDialog>
          <Stack>
            <Typography component="h2">
              Please upload a .json file to add more restaurants.
            </Typography>
            <Button
              component="label"
              sx={{
                bgcolor: primaryMain,
                "&:hover": { bgcolor: primaryDarker },
              }}
            >
              Choose File
              <input
                type="file"
                accept=".json"
                onChange={constructUploadedFile}
                hidden
              />
            </Button>
          </Stack>
        </ModalDialog>
      </Modal>

      <FlexBox sx={navbarStyle}>
        <FlexBox alignItems="center">
          <Hoverable
            component="img"
            src={logo}
            alt="Logo"
            width="40px"
            height="40px"
            onClick={homeButtonHandler}
            sx={{ marginRight: "10px" }}
          />
          <Typography level="h3" textColor="white">
            MyRizztuarants
          </Typography>
        </FlexBox>
        <FlexBox gap="10px">
          <Button
            variant="plain"
            sx={{
              color: "white",
              "&:hover": { bgcolor: primaryLight },
            }}
            onClick={() => setOpenImportModal(true)}
          >
            IMPORT
          </Button>
          <Button
            variant="plain"
            sx={{
              color: "white",
              "&:hover": { bgcolor: primaryLight },
            }}
            onClick={() => setOpenExportModal(true)}
          >
            EXPORT
          </Button>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Navbar;
