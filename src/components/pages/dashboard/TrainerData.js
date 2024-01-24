import GridViewIcon from "@mui/icons-material/GridView";
import Chat from "../messages/Chat";
import ListIcon from "@mui/icons-material/List";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Feed from "../feed/Feed";
// import TrainerMytrainings from "../mytrainings/TrainerTrainerMytrainings";
import ProposalMangement from "../proposalMangement/TrainerProposalMangement";
import TrainerSettings from "../settings/TrainerSettings";
import TrainerBillPayments from "../billpayments/TrainerBillPayments";

export   const optionTrainer = [
    {
      name: "Dashboard",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "Feed",
      icon: <ListIcon sx={{ marginRight: "10px" }} />,
      show:<Feed/>
    },
    {
      name: "My Trainings",
      icon: <RateReviewOutlinedIcon sx={{marginRight:"10px"}}/>,
      show:''
    },
    {
      name: "Messages",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<Chat/>
    },
    {
      name: "Proposal Management",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<ProposalMangement/>
    },
    {
      name: "Settings",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<TrainerSettings/>
    },
    {
      name: "Billing & Payments",
      icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
      show:<TrainerBillPayments/>
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