import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components';


const FindJobs = () => {

  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [date, setdata] = useState([]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJoblocation]= useState("");
  const [filterJobType, setFilterJobType] = useState([])
  const [filterExp, setFilterExp] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  
  const location = useLocation()
  const navigate = useNavigate()



  return (
    <>
      <Header
        title="Find Your Dream Job with Ease"
        type="home"
        handleClick={() => {}}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={jobLocation}
        setLocation={setJoblocation}
      />
    </>
  );
}

export default FindJobs