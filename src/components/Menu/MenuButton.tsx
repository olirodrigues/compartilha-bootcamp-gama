import { Box, Button, useTheme } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { IconType } from "react-icons";
import { CSSProperties } from "react";

type MenuButtonProps = { Icon: IconType; children: any; link: string; disabled?: boolean };

const buttonStyles: CSSProperties = {
  justifyContent: "flex-start",
  textTransform: "none",
  paddingBlock: 9,
  paddingInline: 15,
};

export const MenuButton = ({ Icon, children, link, disabled }: MenuButtonProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const resolved = useResolvedPath(link);
  const isSelected = useMatch({ path: resolved.pathname, end: true });

  const color = isSelected ? theme.palette.primary : theme.palette.text.secondary;

  return (
    <Button
      disabled={disabled}
      fullWidth
      style={buttonStyles}
      variant={isSelected ? "contained" : "text"}
      startIcon={<Icon size={22} color={color.toString()} />}
      onClick={() => navigate(link)}
    >
      <Box color={color.toString()}>{children}</Box>
    </Button>
  );
};
