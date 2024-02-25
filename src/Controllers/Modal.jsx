import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ReactComponent as Git } from "../IMG's/FontAwesomeIcons/github.svg";
import { ReactComponent as Home } from "../IMG's/FontAwesomeIcons/home.svg";
// import trans from "../Other/translate.json";

const Modal = ({ modalData, setModalData }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label; 
          },
        },
      },
    },
  };
  return (
    <>
    <div className="modal">

    <div className="modal-header">
        <div className="modal-header__row">
            <h5>{modalData.type}</h5>
            <button onClick={()=> setModalData(null)}>X</button>
        </div>
        <div className="modal-header__row">
            <h6>{modalData.name}</h6>
        </div>
    </div>
    <div className={`modal-content ${modalData.canvas_url ? 'modal-content--youtube' : 'modal-content--pages'}`}>
        { modalData.chartData && <div className="modal-content__chart"><Pie data={modalData.chartData} options={options}/></div>}
        { modalData.canvas_url && <div className="modal-content__chart"><iframe width="560" height="315" src={modalData.canvas_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>}
        <div className="modal-content__description">{modalData.description}</div>
        <div className="modal-content__icons">
            {modalData.homeUrl && <a href={modalData.homeUrl} target="_blank" rel="noopener noreferrer"><Home/></a>}
            {modalData.url && <a href={modalData.url} target="_blank" rel="noopener noreferrer"><Git/></a>}
            
        </div>
    </div>
        
    </div>
    <div className="backdrop"></div>
    </>
  );
};
export default Modal;
