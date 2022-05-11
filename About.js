export default function About(){
    return(
        <div><center><h1>React Router Application</h1></center>
    <p>Create an application in which user can view articles on different topics. The application should have the following links :-</p>
    <ul>
        <li>About</li>
        <li>Articles</li>
        <li>Categories</li>
        <li>Subscribe</li>
    </ul>
    <strong>Description:-</strong>
    <ul>
        <li><strong>About:</strong>Clicking on this link should render a component which will give a brief description of the application.</li>
        <li><strong>Articles:</strong>Clicking on this link should render a component which will contain titles of different articles. Clicking on the title should display the entire article.</li>
        <li><strong>Categories:</strong>This section contains different categories of articles. User can select any one of the categories.</li>
        <li><strong>Subscribe:</strong>This section contains a single input field and a button. The user will enter the email in the input field.</li>
    </ul>
    <strong>Footer section:-</strong>
    <p>There should be two buttons in the footer section, <b>back and next.</b></p>
    <p>By clicking on back button, previously visited component should be rendered. Next button will be used to go back to the current component</p>
    </div>
    )
}