import styles from "../../styles/PartnersPage/PartnersPage.module.css";
import { inter_Bold, inter_Regular } from "../common/Fonts";

const AllIntegrations = (props) => {
   return (
      <div>
         <h1 className={`${styles.integrationsDetailsHeading} ${inter_Bold.className}`}>
            {props?.title}
         </h1>
         <div className={styles.integrationsGridDiv}>
            {props.IntegrationData.map((el) => (
               <div className={styles.integrationDataContainerMain}>
                  <div>
                     {/* <img src={el.url} alt="integration" /> */}
                  </div>
                  {/* <div>
                     <h2 className={inter_Bold.className}>{el.title}</h2>
                     <p className={inter_Regular.className}>
                        {el.description
                           ? el.description
                           : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."}
                     </p>
                     <p className={`${styles.knowMoreI} ${inter_Bold.className}`}>Know More</p>
                  </div> */}
               </div>
            ))}
         </div>
      </div>
   );
};

export default AllIntegrations;
