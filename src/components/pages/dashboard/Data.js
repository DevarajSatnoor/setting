import GridViewIcon from "@mui/icons-material/GridView";
import Chat from "../messages/Chat";
import PostRequriement from '../postrequirements/Requirements'
import ListIcon from "@mui/icons-material/List";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import TrainingResources from "../trainingresourecs/TrainingResources";
import TrainersList from "../trainerlist/TrainersList";

export   const option = [
    {
      name: "Dashboard",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "TrainerList",
      icon: <ListIcon sx={{ marginRight: "10px" }} />,
      show:<TrainersList/>
    },
    {
      name: "Post a Requirements",
      icon: <RateReviewOutlinedIcon sx={{marginRight:"10px"}}/>,
      show:<PostRequriement/>
    },
    {
      name: "My Training Program’s",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "Trainers Directory",
      icon: <GridViewIcon sx={{ marginRight: "10px" }}/>,
      show:<Chat/>
    },
    {
      name: "Messages",
      icon: <GridViewIcon sx={{ marginRight: "10px" }}/>,
      show:<Chat/>
    },
    {
      name: "Proposal Management",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "Settings",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "Billing & Payments",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "Training Analytics",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "Training Resource",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<TrainingResources/>
    },
    {
      name: "Help & Support",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "Privacy & Security",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
  ];