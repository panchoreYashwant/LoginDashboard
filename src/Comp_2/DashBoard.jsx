import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./Login";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function DashBoard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [story, setStory] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //   fetch('https://dummyjson.com/products/1')

  const Post = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      // console.log(res.data.products);

      setData(res.data.products);
      // console.log(res.data.products);
    });
  };

  useEffect(() => {
    Post();
  }, []);

  return (
    <>
      <div className="w-100 ">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="bg-dark"
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemclassName=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 8,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderclassName=""
          slidesToSlide={2}
          swipeable={true}
        >
          {data.map((dt) => (
            //   <div className="item ">
            <div className="top_card_carousel m-1 ">
              <img
                style={{ width: "170px", height: "170px" }}
                src={dt.thumbnail}
                className="img-fluid profile_img rounded rounded-5 "
                // alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="d-flex pt-5  justify-content-center bg-dark ">
        <div >
          {data.map((dt) => (
            <Card sx={{ width: 1000}}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <img src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg" />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={dt.title}
                subheader="September 14, 2016"
              />
              <img className="img-fluid w-100" src={dt.thumbnail} />

              <CardActions
                className="d-flex justify-content-between"
                disableSpacing
              >
                <div>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    <span className="fs-6">{dt.price}</span>
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <ChatBubbleSharpIcon />
                    <span className="fs-6">{dt.stock}</span>
                  </IconButton>
                </div>

                <div>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <MailRoundedIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <BookmarkIcon />
                  </IconButton>
                </div>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default DashBoard;
