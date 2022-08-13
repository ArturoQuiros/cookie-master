import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Cookies from "js-cookie";
import { Layout } from "../components/layouts";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const ThemeChangerPage: FC<any> = ({ theme }) => {
  const [currenTheme, setCurrenTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentTheme = event.target.value;

    setCurrenTheme(currentTheme);
    Cookies.set("theme", currentTheme);
  };

  useEffect(() => {
    console.log(theme);
  }, []);

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

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "Light" } = req.cookies;

  return {
    props: {
      theme,
    },
  };
};

export default ThemeChangerPage;
