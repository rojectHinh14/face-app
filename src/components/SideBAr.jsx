import { AccountBalance, HomeOutlined, Hub, Language, Message, People } from '@mui/icons-material'
import { List, ListSubheader } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBAr = () => {
  return (
    <div className='w-64 gap-4 flex flex-col'>
      <List className='flex flex-col !py-4 !px-4 bg-white shadow ' >
        <Link to='/'><HomeOutlined className='gap-1 flex items-center'/> New Feeds</Link>
        <Link to='/'><Message  className='gap-1 flex items-center' /> Message</Link>
        <Link to='/'><People  className='gap-1 flex items-center' /> Freind</Link>
        <Link to='/'><Hub  className='gap-1 flex items-center'/> Group</Link>
      </List>

      <List className='flex flex-col !py-4 !px-4 bg-white shadow '>
        <ListSubheader>Settings</ListSubheader>
        <Link to='/settings/account'> <AccountBalance className='gap-1 flex items-center'/> Account</Link>
        <Link to='/settings/language'><Language className='gap-1 flex items-center'/> Languages</Link>
      </List>
    </div>
  )
}

export default SideBAr
