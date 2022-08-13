import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { Layout } from "../components/layouts";

const ThemeChangerPage = () => {
  const [currenTheme, setCurrenTheme] = useState("Dark");
  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrenTheme(event.target.value);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup onChange={onThemeChange} value={currenTheme}>
              <FormControlLabel
                value={"Light"}
                control={<Radio></Radio>}
                label="Light"
              />
              <FormControlLabel
                value={"Dark"}
                control={<Radio></Radio>}
                label="Dark"
              />
              <FormControlLabel
                value={"Custom"}
                control={<Radio></Radio>}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangerPage;
