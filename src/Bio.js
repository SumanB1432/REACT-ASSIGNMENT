import React from "react";
import './Bio.css'
class Bio extends React.Component{
    constructor(){
        super();
        this.state={
            intro:"",
            p:"Hi good morning sir/mam. Firstly, I'm very thankful for giving me this opportunity to introduce myself to you.Myself Preethi. KR from Hyderabad.I have experience: I had an experience of 3yrs in administration, telecalling, receptionist, student coordinator and accounts management at the Fortune school of business.Education: I completed my graduation BSC in computer science in 2022 with 70% in Vivekananda degree college which is affiliated to Osmania university.And also I completed my intermediate with 90% in NLVRGSRV Jr. College (APRJC) Nimmakur Krishna dist. AP in 2015 and my secondary schooling with 7.3 GPA in The Pratibha High School in 2013.I had a basic knowledge of computer skills like ms office.I'm a quick learner with patience & self-discipline person.I manage my time n make my surroundings a positive vibe.I can stick to the word once I made my decision and can able to understand others' emotions n feelings and how they are going to.Hobbies: playing chess, badminton, throwball, making arts n crafts, listening to music, travelling, and sometimes reading books.Languages I speak and write Telugu (I'm good at both speaking g n writing), English, (i can manage speaking/I'm good at writing) Hindi (i can manage to speak n write Hindi).My strengths are my parents who support me & encourage me & correct me n learns me to handle situations. I don't have a particular weakness but if I'm low and weak times I sit calm n listen to some good music which refreshes me again & gets me back to my work normally.That's all about me.Thank you.",
        };
    }
    upperCase(){
        this.setState({
            intro:this.state.intro+this.state.p.toUpperCase()
        });
    }

   
    render(){
      return <div className='intro'>
        <p>
          {this.state.p}
         <div className="button">
            <button onClick={()=>{this.upperCase()}} >See In Upper Case</button>
        </div>
        <div>{this.state.intro}</div>
            </p>

      </div>
      
    }
}

export default Bio
