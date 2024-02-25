import './App1.css';
import './App.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const App = () =>{
    return(
        <div>
        <div className='heading1'>MEET THE TEAM</div>
        <br />
        <div className='meet_team1'>
            <button className='icon1'><FaArrowLeft  size={50}/></button>
        <div className='t1'>
            <div className='dets1'>
            <p className='pos1'>
            A director of operations is responsible for the profitability and growth of an organization or company.  
            </p>
            <br />
            <h1 className='name1'>
                <strong>Keith Paulson</strong>
            </h1>
            <p className='des1'>
                Director of Operations
            </p>
            </div>
        </div>
        <div className='t2'>
        <div className='dets2'>
            <p className='pos2'>
            Corporate vice presidents are the second or third in command in a company, depending 
            on the company's specific structure. 
            </p>
            <br />
            <h2 className='name2'>
                <strong>Sandra Will</strong>
            </h2>
            <p className='des2'>Vice President</p>
            </div>
        </div>
        <div className='t3'>
        <div className='dets3'>
            <p className='pos3'>
            CEOs are responsible for overseeing the entire C-level executive team
            </p>
            <br />
            <h3 className='name3'>
                <strong>Andrew Cath</strong>
            </h3>
            <p className='des3'>CEO</p>
            </div>
        </div>
        <div className='t4'>
        <div className='dets4'>
            <p className='pos4'>
            A COO works closely with the CEO of a company, and their role is defined by the CEO. I
            </p>
            <br />
            <h4 className='name4'>
                <strong>Bill Gates</strong>
            </h4>
            <p className='des4'>COO</p>
            </div>
        </div>
        <button className='icon2'><FaArrowRight size = {50} /></button>
        </div>
        <br /><br /><br /><br />
        <div className='heading2'>EVENTS</div>
        <div className='events'>
            <div className='event1'>
                <div><IoIosArrowForward  size={70} className='icon3'/></div>
                <div className='no1'>01</div>
                <div className='edets1'>Branding strategies in the age of the metaverse</div>
            </div>
            <div className='event2'>
                <div><IoIosArrowForward size={70} className='icon4'/></div>
                <div className='no2'>02</div>
                <div className='edets2'>How to use VR and AR technology to generate sales</div>
            </div>
            <div className='event3'>
                <div><IoIosArrowForward size={70} className='icon5'/></div>
                <div className='no3'>03</div>
                <div className='edets3'>Tips and tricks for the latest digital platforms</div>
            </div>
        </div>
        </div>
    )
}
export default App;