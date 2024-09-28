import Box from "@mui/material/Box";
import DashboardHeader from "../constants/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { packages } from "../constants/Packages";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { RiSecurePaymentLine } from "react-icons/ri";

// Styled components for HR, Button, and Card
const StyledHr = styled("hr")`
  border: none;
  border-bottom: 2px solid #333;
  margin: 16px 0;
`;

const StyledButton = styled(Button)`
  background-color: #333;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: auto; /* Pushes the button to the bottom */
  &:hover {
    background-color: #444;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

const StyledCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 100%;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Packages = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/paymentgateway");
  };

  return (
    <div className="h-screen grid grid-rows-[auto,1fr] overflow-x-hidden">
      <DashboardHeader />
      <div className="grid grid-cols-[200px,1fr]">
        <Sidebar className="overflow-y-auto h-full" />
        <Box
          component="section"
          sx={{ p: 2, border: "1px solid grey", backgroundColor: "#f9f9f9" }}
          className="col-span-1 pl-2 pr-2 mr-2 ml-2 bg-white rounded-lg"
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ mb: 2, fontWeight: 700 }}
          >
            Our Exclusive Packages
          </Typography>
          <StyledHr />
          <div className="flex h-[600px] justify-evenly gap-6">
            {packages.map((card) => (
              <StyledCard key={card.id}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mb: 1, fontWeight: 600 }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    mb: 1,
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "#ff4c60",
                  }}
                >
                  Price: <span className="font-bold">{card.price}</span>
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ mb: 1, fontSize: "1.1rem", color: "#2c3e50" }}
                >
                  Tax: <span className="font-bold">{card.tax}</span>
                </Typography>
                <ol className="list-none p-0 mt-4 space-y-2">
                  {card.suitedFor.map((list, index) => (
                    <li
                      className="flex items-center gap-2 text-gray-600"
                      key={index}
                    >
                      <SiTicktick className="h-4 w-4 text-green-500" />
                      {list}
                    </li>
                  ))}
                </ol>
                <StyledButton onClick={handleClick}>
                  Get Started Now
                  <RiSecurePaymentLine className="ml-[10px] text-[21px] text-cyan-400" />
                </StyledButton>
              </StyledCard>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Packages;
