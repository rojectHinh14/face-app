import { Button } from '@mui/material'
import React from 'react'
import SideBAr from '../components/SideBAr'
import PostCreation from '../components/PostCreation'
import PostList from '../components/PostList'
import FriendRequest from '../components/FriendRequest'

const HomePage = () => {
  return (
    <div className='flex gap-4 p-6 bg-gray-100'>
        <SideBAr/>
        <div className='flex-1'>
            <PostCreation/>
            <PostList/>
        </div>
        <div className='w-64'>
          <FriendRequest/>
        </div>
    </div>
  )
}

export default HomePage
