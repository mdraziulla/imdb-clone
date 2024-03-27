import React, {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
ContentWrapper;
SwitchTabs;
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/carousel/Carousel';
Carousel

const Upcomming = () => {
  const [endpoint,setEndPoint]=useState("movie");
  const {data,loading}=useFetch(`/${endpoint}/upcoming`);
    const onTabChange=(tab)=>{
        setEndPoint(tab==='Movies' ? "movie" : "tv");
    }
    console.log(data);
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Upcomming</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Upcomming