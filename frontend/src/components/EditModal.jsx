import {
  Input,
  Modal,
  ModalDialog,
  Typography,
  Stack,
  Box,
  IconButton,
  Button,
  ModalOverflow,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import {
  FlexBox,
  Hoverable,
  primaryLight,
  primaryLighter,
  primaryMain,
} from "../utils/generalStyles";
import { storage } from "../utils/storage";
import { Tag } from "../components/Tag";
import { OrangeButton } from "./OrangeButton";

import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { TextAreaInput } from "./TextAreaInput";
import { getBase64 } from "../utils/helpers";

const EditModal = ({ open, setOpen, data, setData }) => {
  const orangeIconStyle = {
    bgcolor: primaryLighter,
    "&:hover": { bgcolor: primaryLight },
  };

  const textButtonStyle = {
    color: primaryMain,
    "&:hover": { bgcolor: primaryLighter },
  };

  const DeleteButton = ({ i }) => {
    return (
      <IconButton
        onClick={() => deleteElement(i)}
        sx={{
          ...orangeIconStyle,
          height: "40px",
        }}
      >
        <DeleteRoundedIcon
          sx={{
            color: primaryMain,
          }}
        />
      </IconButton>
    );
  };

  const [prevData, setPrevData] = useState({});

  const [openTagModal, setOpenTagModal] = useState(false);
  const [openNotesModal, setOpenNotesModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const [cuisine, setCuisine] = useState("");
  const [embed, setEmbed] = useState("");
  const [suburb, setSuburb] = useState("");
  const [otherTags, setOtherTags] = useState([]);
  const [elements, setElements] = useState([]);

  const [newTag, setNewTag] = useState("");

  const [isText, setIsText] = useState(true);
  const [text, setText] = React.useState("");

  useEffect(() => {
    if (open) {
      setPrevData({ ...data });
      setCuisine(data.tags.cuisine);
      setSuburb(data.tags.suburb);
      setEmbed(data.embed);
      setOtherTags([...data.tags.other]);
      setElements([...data.elements]);
    }
  }, [data, open]);

  const handleEditClose = () => {
    if (JSON.stringify(data) === JSON.stringify(prevData)) {
      setOpen(false);
    } else {
      setOpenConfirmModal(true);
    }
  };

  const handleSubmit = (e = undefined) => {
    e?.preventDefault();
    const newData = { ...data };
    newData.tags.cuisine = cuisine;
    newData.tags.suburb = suburb;
    newData.embed = embed;
    newData.tags.other = otherTags;
    newData.elements = elements;
    storage.setRes(newData);
    setData(newData);
    setOpen(false);
  };

  const getElement = (ele, i) => {
    const key = Object.keys(ele)[0];
    const value = ele[key];

    if (key === "text") {
      return (
        <FlexBox key={i} justifyContent="space-between">
          <Typography level="p" fontSize="20px" sx={{ marginRight: "40px" }}>
            {value}
          </Typography>
          <Box sx={{ position: "absolute", right: "20px" }}>
            <DeleteButton i={i} />
          </Box>
        </FlexBox>
      );
    } else if (key === "image") {
      return (
        <FlexBox
          height="250px"
          maxWidth="280px"
          m="10px auto"
          justifyContent="center"
          key={i}
        >
          <Box
            component="img"
            src={value}
            alt={`Element ${i}`}
            height="100%"
            sx={{ objectFit: "cover" }}
          />
          <Box sx={{ position: "absolute", right: "20px" }}>
            <DeleteButton i={i} />
          </Box>
        </FlexBox>
      );
    }
  };

  const handleTagAdd = () => {
    const addedTag = [...otherTags];
    addedTag.push(newTag);
    setOtherTags([...addedTag]);
    handleTagModalClose();
  };

  const handleDeleteTag = (toDelete) => {
    const deleteTag = [...otherTags];
    deleteTag.splice(toDelete, 1);
    setOtherTags([...deleteTag]);
  };

  const handleTagModalClose = () => {
    setOpenTagModal(false);
    setNewTag("");
  };

  const handleNotesAddText = (e) => {
    e.preventDefault();
    const addText = [...elements];
    addText.push({ text: `${text}` });
    setElements([...addText]);
    handleNotesModalClose();
  };

  const handleNotesAddImage = (e) => {
    const thumbnail = e.target.files;
    if (!thumbnail || thumbnail.length < 1) return;
    if (!thumbnail[0]) return;
    getBase64(thumbnail[0], (result) => {
      const addImage = [...elements];
      addImage.push({ image: result });
      setElements([...addImage]);
      handleNotesModalClose();
    });
  };

  const handleNotesModalClose = () => {
    setOpenNotesModal(false);
    setText("");
  };

  const deleteElement = (index) => {
    const deleteEle = [...elements];
    deleteEle.splice(index, 1);
    setElements([...deleteEle]);
  };

  const handleContinueEdit = () => {
    setOpenConfirmModal(false);
  };

  const handleStopEdit = () => {
    setOpenConfirmModal(false);
    setOpen(false);
  };

  return (
    <>
      <Modal open={openConfirmModal} onClose={() => setOpenConfirmModal(false)}>
        <ModalDialog>
          <Stack gap="10px">
            <Typography component="h2">
              There is unsaved data. Do you wish to stop editting?
            </Typography>
            <FlexBox>
              <Button
                variant="plain"
                sx={textButtonStyle}
                onClick={handleStopEdit}
              >
                Yes
              </Button>
              <Hoverable onClick={handleContinueEdit}>
                <OrangeButton>No</OrangeButton>
              </Hoverable>
            </FlexBox>
          </Stack>
        </ModalDialog>
      </Modal>

      <Modal open={openTagModal} onClose={handleTagModalClose}>
        <ModalDialog>
          <form onSubmit={handleTagAdd}>
            <Stack gap="10px">
              <Typography component="h2">Add a tag</Typography>
              <Input
                placeholder="Add new tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <OrangeButton type="submit">Add</OrangeButton>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      <Modal open={openNotesModal} onClose={() => setOpenNotesModal(false)}>
        <ModalDialog sx={isText ? { minWidth: "40%" } : {}}>
          <form onSubmit={handleNotesAddText}>
            <Stack gap="10px">
              <FlexBox justifyContent="center" gap="10px">
                <Button
                  variant="plain"
                  sx={textButtonStyle}
                  onClick={() => setIsText(true)}
                >
                  TEXT
                </Button>
                <Button
                  variant="plain"
                  sx={textButtonStyle}
                  onClick={() => setIsText(false)}
                >
                  IMAGE
                </Button>
              </FlexBox>
              {isText ? (
                <>
                  <TextAreaInput text={text} setText={setText} />
                  <OrangeButton type="submit">Add</OrangeButton>
                </>
              ) : (
                <FlexBox justifyContent="center">
                  <IconButton
                    component="label"
                    sx={{
                      ...orangeIconStyle,
                      height: "180px",
                      width: "300px",
                    }}
                  >
                    <LibraryAddRoundedIcon
                      sx={{
                        color: primaryMain,
                      }}
                    />
                    <input
                      type="file"
                      accept=".jpeg, .png, .jpg"
                      hidden
                      onChange={handleNotesAddImage}
                    />
                  </IconButton>
                </FlexBox>
              )}
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      <Modal open={open} onClose={handleEditClose}>
        <ModalOverflow>
          <ModalDialog sx={{ width: "100%", maxWidth: "30%" }}>
            <form onSubmit={handleSubmit}>
              <Stack gap={2}>
                <FlexBox justifyContent="space-between" alignItems="center">
                  <Typography component="h2">Cuisine</Typography>
                  <Input
                    placeholder="e.g. Korean"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    sx={{ width: "250px" }}
                  />
                </FlexBox>

                <FlexBox justifyContent="space-between" alignItems="center">
                  <Typography component="h2">Place</Typography>
                  <Input
                    placeholder="e.g. Town Hall"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    sx={{ width: "250px" }}
                  />
                </FlexBox>

                <FlexBox justifyContent="space-between" alignItems="center">
                  <Typography component="h2">Video Link</Typography>
                  <Input
                    placeholder="Embed a link! (e.g. TikTok, Youtube)"
                    value={embed}
                    onChange={(e) => setEmbed(e.target.value)}
                    sx={{ width: "250px" }}
                  />
                </FlexBox>

                <FlexBox alignItems="center">
                  <Typography component="h2" sx={{ marginRight: "10px" }}>
                    Other Tags
                  </Typography>
                  <Typography fontSize="12px">
                    (click on a tag to delete)
                  </Typography>
                </FlexBox>
                <FlexBox
                  alignItems="center"
                  gap="10px"
                  sx={{ flexFlow: "row wrap" }}
                >
                  {otherTags.map((tag, i) => (
                    <Hoverable onClick={() => handleDeleteTag(i)} key={i}>
                      <Tag>{tag}</Tag>
                    </Hoverable>
                  ))}
                  <IconButton
                    sx={orangeIconStyle}
                    onClick={() => setOpenTagModal(true)}
                  >
                    <AddCircleOutlineRoundedIcon sx={{ color: primaryMain }} />
                  </IconButton>
                </FlexBox>

                <Typography component="h2">Notes</Typography>
                {elements.map((element, i) => getElement(element, i))}
                <IconButton
                  sx={orangeIconStyle}
                  onClick={() => setOpenNotesModal(true)}
                >
                  <AddCircleOutlineRoundedIcon sx={{ color: primaryMain }} />
                </IconButton>

                <OrangeButton type="submit">Save</OrangeButton>
              </Stack>
            </form>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </>
  );
};

export default EditModal;
