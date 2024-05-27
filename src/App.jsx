
import Pricecard from "./components/Pricecard";

 const App = () => {

  const PricecardData = [
    {
      plan: "Free",
      price: 0,
      user: 'single user',
      isUser: true,
      storage: '5 GB',
      isStorage: true,
      projects: "Unlimited Public Projects",
      isProjects: true,
      access: "Community Access",
      isAccess: true,
      privateProjects:  "Unlimited Private Projects",
      isprivateProjects: false,
      phoneSupport:"Dedicated Phone Support", 
      isPhoneSupport: false,
      subdomain: "Free Subdomain",
      isSubDomain: false,
      report: "Monthly Status Reports",
      isReport: false,
    },
    {
      plan: "plus",
      price: 9,
      user: 'single user',
      isUser: true,
      storage: '50 GB',
      isStorage: true,
      projects: "Unlimited Public Projects",
      isProjects: true,
      access: "Community Access",
      isAccess: true,
      privateProjects:  "Unlimited Private Projects",
      isprivateProjects: true,
      phoneSupport:"Dedicated Phone Support", 
      isPhoneSupport: true,
      subdomain: "Free Subdomain",
      isSubDomain: true,
      report: "Monthly Status Reports",
      isReport: false,
    },
    {
      plan: "pro",
      price: 49,
      user: 'single user',
      isUser: true,
      storage: '150 GB',
      isStorage: true,
      projects: "Unlimited Public Projects",
      isProjects: true,
      access: "Community Access",
      isAccess: true,
      privateProjects:  "Unlimited Private Projects",
      isprivateProjects: true,
      phoneSupport:"Dedicated Phone Support", 
      isPhoneSupport: true,
      subdomain: "Free Subdomain",
      isSubDomain: true,
      report: "Monthly Status Reports",
      isReport: true,
    },
    ];

    return (
    <div>
      <section class="pricing py-5">
        <div class="container">
           <div class="row">
              {
                PricecardData.map((index,data) =>{
                  return <Pricecard key = {index}  data = {data}/>
                })
              }
           </div>
         </div>
      </section>
    </div>
    )
}
export default App;