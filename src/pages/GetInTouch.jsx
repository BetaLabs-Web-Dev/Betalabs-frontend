import React from 'react'
import "./GetInTouch.css"
const GetInTouch = () => {

  return (
    <div class="container">
    <p class="title">Get In Touch</p>
    <div class="wrapper">
        
        <form id="getintouch">
            <section >
                <div class="input-group" >
                    <label for="fn">First Name</label>
                    <input id="fn" />
                </div>
                <div class="input-group" >
                    <label for="ln">Last Name</label>
                    <input id="ln" />
                </div>

            </section>
            <section >
                <div class="input-group">
                    <label for="email">Email</label>
                    <input id="email" />
                </div>
                <div class="input-group">
                    <label for="phone">Phone Number</label>
                    <input id="phone" />
                    
                </div>  
            </section>
            <section  >
            <div class="input-group">
                <label for="msg">Message</label>    
                <input id="msg" class="message" placeholder='Write your Message'/>
            </div>  
            </section>
            <button type="submit" form="getintouch" class="btn">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default GetInTouch