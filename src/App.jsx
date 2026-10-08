import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './component/Card.jsx'

const App = () => {
const  jobs = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/LnNfaAKkF77qnlWO-EUOEYr7WDgshtWWrf_53aly7KE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ28ub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzA1/L01pY3Jvc29mdC0z/NjUtTG9nby1WZXJ0/aWNhbC0yMDIwLnBu/Zy53ZWJw",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/Yq1s_vzLmldjmFJsyCb4kZoNLvIkoDpt1khXCmX3W-c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9h/bWF6b24tb2ZmaWNp/YWwtbG9nby03MDE3/NTE2OTQ3OTE5NjUx/ZXBveWhrcW9yLnBu/Zw",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    company: "Apple",
    datePosted: "4 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/17Z08VaemRypEXW6ZoaC2OUFu3e5iT08tP7EURsEw9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/6BWs6Hep1mBSjWUL26Gr9AktIqGWuct1dIk0hWeDlLY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA4/L1NhbGVzZm9yY2Ut/TG9nby01MDB4MzI5/LnBuZw",
    company: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/uber",
    company: "Uber",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/accenture",
    company: "Accenture",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$25/hour",
    location: "Pune, India",
  },
];

  return (

    <div className='parent'>
       {jobs.map(function(e,idx){
        return <div key={idx}>
         <Card company={e.company} brandLogo={e.brandLogo} datePosted={e.datePosted} post={e.post} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location}/>
       </div>
       })}

    </div>
      )
}

export default App
