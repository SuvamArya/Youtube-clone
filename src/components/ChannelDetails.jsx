import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI';
import { Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import Videos from './Videos';


function ChannelDetails() {

  const [channelDetail, setChannelDetail]=useState(null)
  const [videos, setVideos] =useState([])
  const {id}= useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  


  return (
    <Box minheight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(250,27,240,1) 20%, rgba(2,182,218,1) 87%)',
          zIndex:10, height:'300px'
        }}></div>
      
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
       
      </Box>
      < Box display='flex' p="2" justifyContent={'center'}>
        <Box sx={{
          mr:{sm:'100px'}
        }}/>
        <Videos videos={videos}/>
      </Box>

    </Box>
    
  )
}

export default ChannelDetails