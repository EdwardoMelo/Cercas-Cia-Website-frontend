import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface props{ 
    name : string;
    applications: string[];
    image: string;
}

const Product = ({name, applications} : props) => {

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Product Name */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        {name}
      </Typography>

      {/* Product Image */}
      <Box
        sx={{
          minWidth: {
            sm: 400,
            xs: "none",
          },
          width: {
            xs: "100%",
            sm: '50%'
          },
          height: 400,
          borderRadius: 2,
          marginBottom: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      />

      {/* Applications Section */}
      <Box
        sx={{
          minWidth: {
            sm: 400,
            xs: "none",
          },
          width: {
            xs: "100%",
            sm: '50%'
          },
          backgroundColor: "#e53935",
          color: "white",
          borderRadius: 2,
          padding: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Aplicações
        </Typography>
        <List>
          {applications.map((application, index) => (
            <ListItem key={index} sx={{ padding: 0 }}>
              <ListItemIcon>
                {/* <CheckCircleIcon sx={{ color: "white" }} /> */}
              </ListItemIcon>
              <ListItemText primary={application} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Product