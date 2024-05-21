import styles from '../Calculate/calculato.module.css'
import axios from 'axios';


const handleCalcuateDay = async values => {
    try {
      const response = await axios.get(
        'https://devnest-back-1.onrender.com/api/todaySummary/{idUser}/{date}',
        {
          params: values,
        }
      );
      console.log('API Response:-----------', response.data);
      /* setResult(response.data); */
      //console.log(setResult(response.data));
     //console.log(setResult); 
      
    } catch (error) {
      console.error('Error fetching daily intake data', error);
    }
};

console.log(handleCalcuateDay());
export default function CalculatorDailyCalories(props){
    return(
        <div className={styles['calculate__field']}>

            <div>
                <h4 className= {styles['titles']}>Summary for {" 13.08.2023"}</h4>
                <ul className={styles['summary__ul']}>
                    <li>
                        <span>Left  </span>
                        <span>{"000 "}Kcal </span>
                    
                    </li>
                    
                    <li>
                        <span>Consumed  </span>
                        <span>{"000 "}Kcal </span>
                    </li>
                    
                    <li>
                        <span>Daily rate  </span>
                        <span>{"000 "}Kcal </span>
                    </li>
                    
                    <li>
                        <span>n% of normal  </span>
                        <span>{"000 "}Kcal </span>
                    </li>
                

                </ul>
            </div>
            <div>
                <h4 className= {styles['titles']}>Food not recommended</h4>
                <ul className= {styles['food']}>
                    <li>Your diet will be displayed here</li>
                    
                    
                </ul>
            </div>
        </div>
    )
}