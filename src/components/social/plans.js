import React from 'react'

export default class Plans extends React.Component {
    render(){
        return(
            <div className="plans-wrapper">

                <div className="plan">
                    <h2 className="plan-name">Bare Minimum</h2>
                    <hr/>
                    <p className="about-plan">Keep your social media channels updated with our bare minimum plan, offering 2 posts per week for only $40/month.</p>
                    <h3>Total posts/week: <span style={{fontWeight:'bold'}}>2</span></h3>
                    <h1 className="price">$39</h1>
                </div>

                <div className="plan">
                    <h2 className="plan-name">Weekend Warrior</h2>
                    <hr/>
                    <p className="about-plan">Provide a little boost to the weekend rush with 4 posts week. We reccommend doing 2 on Friday and 2 on Saturday to make the most of the weekend vibes.</p>
                    <h3>Total posts/week: <span style={{fontWeight:'bold'}}>4</span></h3>
                    <h1 className="price">$69</h1>
                </div>

                <div className="plan mvp">
                    <div className="most-popular"><p>Most Popular!</p></div>
                    <h2 className="plan-name">Steady Presence</h2>
                    <hr/>
                    <p className="about-plan">This is our most popular plan. It lets you focus on the weekend, but not leave everyone hanging during the work week. Fantastic option for any small business. </p>
                    <h3>Total posts/week: <span style={{fontWeight:'bold'}}>8</span></h3>
                    <h1 className="price">$129</h1>
                </div>

                <div className="plan">
                    <h2 className="plan-name">Optimal Presense</h2>
                    <hr/>
                    <p className="about-plan">Our best value plan! Perfect for active businesses wanting to grow an organic following and always have something new on their feed. </p>
                    <h3>Total posts/week: <span style={{fontWeight:'bold'}}>14</span></h3>
                    <h1 className="price">$199</h1>
                </div>

            </div>
        )
    }
}