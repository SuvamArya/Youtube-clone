import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle  } from '@mui/icons-material'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from './utils/constants'

const VideoCard = ({video:{id:{
    videoId}, snippet}}) => {
  return (
    <Card  sx={{
      
      width:{ xs:'100%' , sm:"350px", md:'300px'},
      boxShadow: 'none', borderRadius: '0', background:'#000'
    }}>
        <Link to={"videoId" ? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia className="videoCard"
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
            width:{xs:'100%' , sm:'350px', md:'300px'}, height:160, borderRadius: '10px'
        }}/>
        </Link>
        <CardContent sx={{backgroundColor:"#000", height:'62px', paddingTop:'5px'}}>
        <Link to={"videoId" ? `/video/${videoId}`:demoVideoUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0,50) ||
            demoVideoTitle.slice(0,50)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`: demoChannelUrl}>
          <Typography variant="subtitle4" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
          </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard