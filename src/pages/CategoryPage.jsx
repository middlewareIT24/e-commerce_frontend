import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import React, { useEffect, useRef } from "react";
import { PageTitle } from "../components";
// styles
import "../styles/utils.css";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 170,
  height: 100,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function CategoryPage() {
  const scrollRef = useRef(null);
  const headline = "Categories";

  useEffect(() => {
    const ref = scrollRef.current;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        // Scroll horizontally by the same amount of vertical scroll
        ref.scrollLeft += e.deltaY;
        e.preventDefault(); // Prevent vertical scroll
      }
    };

    ref.addEventListener("wheel", handleWheel);

    return () => {
      ref.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const categoryList = [
    "General",
    "Kids",
    "Boys",
    "Girls",
    "Adults",
    "Electric",
  ]; // should be implement dynamic

  return (
    <>
      <PageTitle title={headline} />

      <Stack
        direction="row"
        justifyContent={"center"}
        spacing={1}
        ref={scrollRef}
        sx={{
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          scrollBehavior: "smooth",
          flexWrap: "nowrap",
        }}
        className="cursor-pointer indexing"
      >
        {categoryList.map((element, index) => {
          return (
            <DemoPaper variant="outlined" key={index}>
              {element}
            </DemoPaper>
          );
        })}
      </Stack>
    </>
  );
}
