import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const PieChart = ({goal, glasses}) => {

    let goalRemaining;

    if (glasses > goal) {
        goalRemaining = 0
    } else {
        goalRemaining = goal - glasses;
    }

    return (
        <div style={{height:"30vh",position:"relative", marginBottom:"1%", padding:"1%"}}>
        <Doughnut
            data={{
                labels: ['Goal', 'Glasses'],
                datasets: [
                    {
                        data: [glasses, goalRemaining],
                        backgroundColor: [ 'rgb(54, 162, 235)', 'rgb(255, 99, 132)']
                    },
                ],
            }}
            options={{ maintainAspectRatio: false }}
        />
        </div>
    )
}

export default PieChart;
