import img from "./1651637815cpds-scaled.jpg"
import img1 from "./1651719583bestprogramminglanguage-scaled.webp"
import img2 from "./1652079939lottie-animation.webp"
import './Categories.css'
export default function Categories(){
    return(
        <div id="ts">
            <div id="di">
                <img src={img2} />
                <h2>The Easiest Way to Animate WordPress Websites: BeBuilder + Lottie</h2>
                <a href="#" id="b1">Web</a>
                <p><b>SitePoint Sponsors, May 10</b></p>
                <p>Lottie animation is the newest and most effective way to animate websites. Learn why Lottie with BeTheme creates better user experiences.</p>
            </div>
        <div id="di">
            <img src={img1} />
            <h2>Which Programming Language Should I Learn First in 2022?</h2>
            <a href="#" id="b2">Programming</a>
            <p><b>Joel Falconer, May 04</b></p>
            <p>It's hard to decide on a programming language to learn first. Here's a look at the most popular languages in 2022, and why they're worthwhile.</p>
        </div>
    <div id="di">
        <img src={img} />
        <h2>How to Create a Color Palette for Your Design System</h2>
        <a href="#" id="b3">Design & UX</a>
        <p><b>SitePoint Team, May 03</b></p>
        <p>A color palette is one of the most important aspects of a design system. Designers can use them to create a visual hierarchy, a unified look and feel, and evoke emotions.</p>
    </div>
</div>
    
    )
}