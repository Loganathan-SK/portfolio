export default function Projects(){
    return(
        <div className="project">
            <h3>Frontend Applications</h3>
            <div class="grid-container">
                <ul>
                <li>
                    <h4>Project Management App - React</h4>
                    <h5>Github &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; <a href="https://github.com/Loganathan-SK/Project-Management-App" target="_blank" rel="noopener noreferrer">TaskFlow</a> </h5>
                    <h5>App Link :&nbsp;&nbsp; <a href="https://task-flow-pro-365.web.app" target="_blank" rel="noopener noreferrer">task-flow-pro</a></h5>
                </li>
                <hr />
                <li>
                    <h4>Quiz App - React</h4>
                    <h5>Github &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; <a href="https://github.com/Loganathan-SK/Quiz-App" target="_blank" rel="noopener noreferrer">Quiz-Zone</a> </h5>
                    <h5>App Link :&nbsp;&nbsp; <a href="https://quiz-247-c6db5.web.app" target="_blank" rel="noopener noreferrer">quiz-zone</a></h5>
                </li>
                </ul>
                <ul>
                <li>
                    <h4>Grocery Website - HTML, CSS, Javascript</h4>
                    <h5>Github &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; <a href="https://github.com/Loganathan-SK/Grocery-Website" target="_blank" rel="noopener noreferrer">Groce-Basket</a> </h5>
                    <h5>App Link :&nbsp;&nbsp; <a href="https://grocebasket.web.app" target="_blank" rel="noopener noreferrer">grocebasket</a></h5>
                </li>
                <hr />
                <li>
                    <h4>Admin DashBoard - HTML, CSS</h4>
                    <h5>Github &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; <a href="https://github.com/Loganathan-SK/Admin-Dashboard" target="_blank" rel="noopener noreferrer">Admin-DashBoard</a> </h5>
                    <h5>App Link :&nbsp;&nbsp; <a href="https://dash-board-admin.web.app" target="_blank" rel="noopener noreferrer">admin-dashboard</a></h5>
                </li>
                </ul>
            </div>
            <h3 id="height1">Academic Projects</h3>
            <ul className="height2">
                <li>
                    <h4>Farm Book - Mobile Application (Flutter, MongoDB)</h4>
                    <h5 className="height3">Abstract: It solves the queries and doubts
                        raised by farmers regarding crop disease precautions, fertilizers to be used 
                        and so on. Our application will connect them with experts from agricultural 
                        universities or farmers who have an apt solution for the query.
                    </h5>
                </li>
                <li>
                    <h4>Turnmill Maintenance Prediction using Deep Learning</h4>
                    <h5 className="height3">Abstract: It predicts the type of failure in the Turnmill Machine</h5>
                    <h5>Algorithms: Long short-term memory (LSTM), XGBoost, Gradient Boosting, Streamlit</h5>
                </li>
            </ul>
        </div>
    );
}