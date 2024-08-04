import profilePic from '../assets/Loganathan - Profile.jpg';

export default function Profile(){
    function handlePdfClick() {
        const pdfUrl = 'https://github.com/Loganathan-SK/Resume/blob/main/Loganathan.pdf'; // Replace with your actual PDF URL
        window.open(pdfUrl, '_blank'); // Open in new tab with '_blank' target
      };
    return (
    <div id="profile">
        <img src={profilePic} alt="Profile" />
        <hr />
        
		<h3>Loganathan Ragupathi</h3>
		<h4>B.E - Computer Science and Engineering</h4>
        <hr />
        
        <h4>Area Of Interest</h4>
        <ul>
            <li>Frontend Development</li>
            <li>Java Development</li>
        </ul>
        <hr />
        <div id='contact'>
            <h5>Mobile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; +91 9600262032</h5>
			<h5>E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; loganathanragupathi2002@gmail.com</h5>
			<h5>Linked-In &nbsp;:&nbsp;&nbsp; <a href="https://www.linkedin.com/in/loganathan-r-292113224" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></h5>
            <h5>Github &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; <a href="https://github.com/Loganathan-SK" target="_blank" rel="noopener noreferrer">GitHub Profile</a></h5>
            <h5>Click here to view the resume :&nbsp; <button onClick={handlePdfClick}>Resume</button></h5>
        </div>
    </div>
    );
}