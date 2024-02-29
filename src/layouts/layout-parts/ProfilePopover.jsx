import { Badge, Box, ButtonBase, Divider, styled, useMediaQuery } from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import { H6, Small, Tiny } from '../../components/Typography';
import FlexBox from '../../components/flexbox/FlexBox';
import AppAvatar from '../../components/avatars/AppAvatar';
import PopoverLayout from './popovers/PopoverLayout';
import avatarOne from '../../static/avatar/001-man.svg'

const StyledButtonBase = styled(ButtonBase)(({
  theme
}) => ({
  padding: 5,
  marginLeft: 4,
  borderRadius: 30,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));
const StyledSmall = styled(Small)(({
  theme
}) => ({
  display: 'block',
  cursor: 'pointer',
  padding: '5px 1rem',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));

const ProfilePopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const upSm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const handleMenuItem = _path => {
    setOpen(false);
  };

  return <Fragment>
      <StyledButtonBase disableRipple ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge overlap="circular" variant="dot" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }} sx={{
        alignItems: 'center',
        '& .MuiBadge-badge': {
          width: 11,
          height: 11,
          right: '4%',
          borderRadius: '50%',
          border: '2px solid #fff',
          backgroundColor: 'success.main'
        }
      }}>
          {upSm && <Small mx={1} color="text.secondary">
              Hi,{' '}
              <Small fontWeight="600" display="inline">
                Aaron Cooper
              </Small>
            </Small>}
          <AppAvatar src={avatarOne} sx={{
          width: 28,
          height: 28
        }} />
        </Badge>
      </StyledButtonBase>

      <PopoverLayout hiddenViewButton maxWidth={230} minWidth={200} popoverOpen={open} anchorRef={anchorRef} popoverClose={() => setOpen(false)} title={<FlexBox alignItems="center" gap={1}>
            <AppAvatar src={avatarOne} sx={{
        width: 35,
        height: 35
      }} />

            <Box>
              <H6>{'Aaron Cooper'}</H6>
              <Tiny display="block" fontWeight={500} color="text.disabled">
                {'aaron@example.com'}
              </Tiny>
            </Box>
          </FlexBox>}>
        <Box pt={1}>
          <StyledSmall onClick={() => handleMenuItem('/dashboard/profile')}>Set Status</StyledSmall>

          <StyledSmall onClick={() => handleMenuItem('/dashboard/profile')}>
            Profile & Account
          </StyledSmall>

          <StyledSmall onClick={() => handleMenuItem('/dashboard/account')}>Settings</StyledSmall>

          <StyledSmall onClick={() => handleMenuItem('/dashboard/team-member')}>
            Manage Team
          </StyledSmall>

          <Divider sx={{
          my: 1
        }} />

          <StyledSmall onClick={() => {
          console.log('Logout')
        }}>
            Sign Out
          </StyledSmall>
        </Box>
      </PopoverLayout>
    </Fragment>;
};

export default ProfilePopover;