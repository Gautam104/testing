import  { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoMdHome } from 'react-icons/io';
import { PiUsersThreeBold } from 'react-icons/pi';
import { BsShopWindow } from 'react-icons/bs';
import { FaListCheck } from 'react-icons/fa6';
import Salons from './Salons';
import Users from './Users';
import Services from './Services'
import { Stack } from '@mui/system';
import { Button } from '@mui/base';
import { HomeButton } from './styles';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Home() {


  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [MetaData,SetMetaData] = useState('Home');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={4}  sx={{ backgroundColor:'#ffffff',color:'#2f2f2f' }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open) }
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" spacing={133}>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight:'bold',color:'black',padding:'10px' }} >
            CUT FX
          </Typography>
          <HomeButton>Log out</HomeButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Divider />
        <List>
        
            <ListItem  disablePadding sx={{ display: 'block' }}  onClick={() => SetMetaData("Home")}  >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
               <IoMdHome style={{ fontSize: '22px' }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>



            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => SetMetaData("Users")} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <PiUsersThreeBold style={{ fontSize: '20px',marginLeft:'3px' }} />
                </ListItemIcon>
                <ListItemText primary="Users" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => SetMetaData("Salons")} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <BsShopWindow style={{ fontSize: '20px',marginLeft:'3px' }} />
                </ListItemIcon>
                <ListItemText primary="Salons" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => SetMetaData("Services")} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <FaListCheck style={{ fontSize: '20px',marginLeft:'3px' }}  />
                </ListItemIcon>
                <ListItemText primary="Services" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


        
        </List>
      </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            { MetaData === "Home" && (
        <div>
        {/* Your Home page content goes here */}
        <Typography variant="h3" sx={{ marginTop:'60px' }}>Welcome to Home Page</Typography>
        <Typography variant="body1">
            This is the main content of your Home page.
        </Typography>
        </div>
    )}
            { MetaData === "Users" && <Users/>}
            { MetaData === "Salons" && <Salons/>}
            { MetaData === "Services" && <Services/>}

        </Box>
        </Box>
    </>
  );
}