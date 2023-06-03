/**
 * TAKEN FROM JOYUI DOCUMENTATION
 * https://codesandbox.io/s/w6i1bl?file=/demo.tsx:0-1181
 */

import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";

export const TextAreaInput = ({ text, setText }) => {
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  return (
    <Textarea
      placeholder="Type in here…"
      value={text}
      onChange={(e) => setText(e.target.value)}
      minRows={8}
      maxRows={20}
      startDecorator={
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("👍")}
          >
            👍
          </IconButton>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("⭐")}
          >
            ⭐
          </IconButton>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("😍")}
          >
            😍
          </IconButton>
        </Box>
      }
      endDecorator={
        <Typography level="body3" sx={{ ml: "auto" }}>
          {text.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
  );
};
