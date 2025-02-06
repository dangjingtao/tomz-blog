import { Button } from "@mui/material";

export default function TButtons(props) {
  const { variant = "contained" } = props;
  const containedStyle =
    "bg-primary hover:bg-primary-dark text-white active:primary-light active:text-white focus:ring focus:border-primary-light";
  const outlinedStyle =
    "border border-primary text-primary hover:text-primary-dark hover:bg-primary-1 active:bg-primary-2 active:text-primary-dark focus:ring focus:border-primary-dark";
  const textStyle = "text-primary";
  const colorStyles: any = {
    contained: containedStyle,
    outlined: outlinedStyle,
    text: textStyle,
  };

  return (
    <Button
      className={`px-3 border py-1.5 leading-6 text-sm rounded-md  ${
        colorStyles[variant] || colorStyles["contained"]
      } font-sans`}
      disableRipple
      {...props}
    />
  );
}
