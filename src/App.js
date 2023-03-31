import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine ,faCoins,faDollar, faSignal,faCaretUp,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { StackedChart } from './StackedChart';

function App() {
  return (
    <div className="App">
     <DashBoard/>
     <OverView/>
    </div>
  );
}
function OverView() {
  const data={
    text:"Overview of Sales Win/Lost",
    par:"Comapred to last month sales.",
  }
  return(
    <div className="overView">
      <div className="summary-box-monthly">
  <h4 className="profit-box-heading" ><b>{data.text}</b></h4>
  <p  className="profit-box-sub-text" style={{color:"#a3a7b7"}}>{data.par}</p>
  </div>
     <StackedChart/>
    </div>
  );
}
function DashBoard() {
  return(
  <div>
      <h1>Welcome to DashBoard📈</h1>
    <SummaryBoxList/>
    <MonthlyProfits/>
  </div>
  )
}
function SummaryBoxList(){
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count",
      linepercent:70,
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
      linepercent:60,
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
      linepercent:50,
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
      linepercent:40,
    }
  ];
  return(
    <div className="summary-box-list">
      {dataList.map((dt)=>(
       <SummaryBox data={dt} />
      ))}
    </div>
  );
}
const BorderLinearProgress = styled(LinearProgress)(({ theme ,lineColor}) => ({
  height: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:"#e1e6f1",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: lineColor,
  },
}));
function SummaryBox({data}) {
  return(
    <div className="summary-box-container">
      <div className="summary-box-spec">
      <p className="summary-box-text">{data.text}</p>
      <FontAwesomeIcon style={{color:data.iconColor}} icon={data.icon} /> 
      </div>
      <h2 className="summary-box-number">
        {data.type==="money"?"$":null}
        {data.number}</h2>
        <BorderLinearProgress lineColor={data.iconColor} variant="determinate" value={data.linepercent} />
      <div className="summary-box-time-container">
      <p>{data.time}</p>{"  "}
      <p><FontAwesomeIcon style={{color: data.performance==="up"?"#03c895":"#ff473d"}} icon={data.performance==="up"?faCaretUp:faCaretDown} /> {data.percent}%</p>
      </div>
    </div>
  )
}

function MonthlyProfits(){
  const data= {
    text: "Monthly Profits",
    par: "Excepteur sint occaecat cupidatat non proidents",
    number: "22,534",
    percent: 75,
    percent1 : 50,
    time:"This Month",
    time1: "Last Month",
    type: "count",
    linepercent:70,
    linepercent1:50,
    lineColor:"#8760fb",
    lineColor1:"#03c895",
  }
  return(<div className="profit-box-container">
  <div className="summary-box-monthly">
  <h4 className="profit-box-heading" ><b>{data.text}</b></h4>
  <p  className="profit-box-sub-text" style={{color:"#a3a7b7"}}>{data.par}</p>
  </div>
  <h2 className="summary-box-number">
    {data.type==="money"?"$":null}
    {data.number}</h2>
   <div className="profit-progress">
   <p style={{color:"#a3a7b7"}}>{data.time}</p>
    <p style={{color:"#24c895"}}>{data.percent}%</p>
   </div>
    <BorderLinearProgress lineColor={data.lineColor} variant="determinate" value={data.linepercent} />
  <div className="profit-progress">
  <p style={{color:"#a3a7b7"}}>{data.time1}</p>
    <p style={{color:"#24c895"}}>{data.percent1}%</p>
  </div>
    <BorderLinearProgress lineColor={data.lineColor1} variant="determinate" value={data.linepercent1} />
  </div>
);
}
export default App;
