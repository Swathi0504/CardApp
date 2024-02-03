import React from 'react'
import Card from './components/Card'

function App() {

  let data = [
    {
      title:"FREE",
      price:"$0",
      period:"/month",
      user:"Single User",
      storage:"50GB Storage",
      publicprojects:"Unlimited Public Projects",
      access:"Community Access",
      privateprojects:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      domain:"Free Subdomain",
      reports:"Monthly Status Reports"
    },
    {
      title:"PLUS",
      price:"$9",
      period:"/month",
      user:"5 Users",
      storage:"50GB Storage",
      publicprojects:"Unlimited Public Projects",
      access:"Community Access",
      privateprojects:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      domain:"Free Subdomain",
      reports:"Monthly Status Reports"
    },
    {
      title:"PRO",
      price:"$49",
      period:"/month",
      user:"Unlimited Users",
      storage:"50GB Storage",
      publicprojects:"Unlimited Public Projects",
      access:"Community Access",
      privateprojects:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      domain:"Free Subdomain",
      reports:"Monthly Status reports"
    }
  ];
  return <>
    <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {/* <!-- Free Tier --> */}
         {
            data.map((e)=>{
              return <Card data={e}/>
            })
          }
            
            
          </div>
        </div>
      </section>
  </>
  
}

export default App