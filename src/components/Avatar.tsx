import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import img01 from "../static/images/imag01.jpg";

export default function ImageAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={img01}
        sx={{
          width: 150,
          height: 150,
          margin: "0 auto",
          alignContent: "center",
        }}
      />
    </Stack>
  );
}
