/*eslint max-len: ["error", 300]*/
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Projects extends React.Component {
  render(){
    return(
      <div className='projects'>
        <div className='single-project-container' id='eatsy-container'>
          <div className='single-project odd' id='eatsy'>
            <span></span>
            <div className='project-description eatsy'>
              <h1>Eatsy</h1>
              <div className='project-links'>
                <div>
                  <div className='project-live'>
                    <a href='http://www.eatsyapp.net/'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479796039/live_ghqrvb.png'/></a>
                  </div>
                  <div className='project-github'>
                    <a href='https://github.com/jz-wang/Eatsy'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479798798/github_h9jurw.png'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='project-description-2 odd'>
            <div id='description-sub'>
              <div id='description-sub-1'>
                <div>
                  <p>Eatsy is a crowd sourced restaurant review app, inspired by Yelp. Users can find their favorite local restaurants. Flip through beautiful pictures and pages.</p>
                </div>
              </div>
              <div id='description-sub-2'>
                <div id='omakase-div'>
                  <img src='https://res.cloudinary.com/cloudlicious/image/upload/c_scale,w_400/v1480350934/omakase-circle_ctciqd.png'/>
                </div>
              </div>
            </div>
            <div id='description-sub'>
              <div id='description-sub-1'>
                <div>
                  <p>Sign up and leave reviews to help other find great local restaurants. All Reviews of a restaurant are tallied and the average rating is calculated when the restaurant is fetched from the database.</p>
                </div>
              </div>
              <div id='description-sub-2'>
                <div id='rating-div'>
                  <StarRatingComponent name='starRateStatic'
                                         starCount={5}
                                         value={2}
                                         starColor={'#e5050b'}
                                         emptyStarColor={'#acacac'}
                                         renderStarIcon={()=>
                                           <span id='rating-star-symbol'>
                                             ✪
                                           </span>} />
                </div>
              </div>
            </div>
            <div id='description-sub'>
              <div id='description-sub-1'>
                <div>
                  <p>Google Maps integration. Provides an overview of all restaurants in the area, as well as individual restaurants.</p>
                </div>
              </div>
              <div id='description-sub-2'>
                <div id='maps-div'>
                  <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1480418671/maps_ububcr.png'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='filler-container'></div>
        <div className='single-project-container' id='sssf-container'>
          <div className='single-project even' id='sssf'>
            <span></span>
            <div className='project-description'>
              <h1>StreetSweepSF</h1>
              <div className='project-links'>
                <div>
                  <div className='project-live'>
                    <a href='https://chrome.google.com/webstore/detail/streetsweepsf/amepcflliholagifophjfhcffnfifbeh'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479796039/live_ghqrvb.png'/></a>
                  </div>
                  <div className='project-github'>
                    <a href='https://github.com/jz-wang/StreetSweepSF'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479798798/github_h9jurw.png'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='project-description-2 even'>
            <div id='description-sub'>
              <div id='description-sub-2'>
                <div id='cleaning-div'>
                  <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1476986584/sssf3-cropped_vguzt2.png'/>
                </div>
              </div>
              <div id='description-sub-1'>
                <div>
                  <p>StreetSweepSF is a Chrome extension that allows users to keep track of their streeting cleaning schedule and alerts them before the cleaning time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='project-description-2 even'>
            <div id='description-sub'>
              <div id='description-sub-2'>
                <div id='heroku-div'>
                  <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1480454259/heroku_pe9wbz.png'/>
                </div>
              </div>
              <div id='description-sub-1'>
                <div>
                  <p>StreetSweepSF uses a dedicated rails server on Heroku, from where to fetch street cleaning data. The rails controller isolates the street name in the user entry and queries the database. By using a seperate server StreetSweepSF ensures a light package while still maintaining the speed in which data is fetched and delivered to the user.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='project-description-2 even'>
            <div id='description-sub'>
              <div id='chrome-notifications-div'>
                <p>When a user enters an address and hits get schedule, the app makes a GET request to the rails server and fetches back raw KML data. The app then parses the data through the react schedules component, which cleverly filters out the next street cleaning schedule based on the current date, and passes the result to the reminders component for the user to select the settings for a desktop notification.</p>
              </div>
              <div id='chrome-notifications-div'>
                <p>Desktop notification is achieved with Chrome's alerts and notifcations apis. When a new reminder is set up, a background page runs continously, even when Chrome is closed. On every 2 minute interval, the background page checks whether the current time is within the desktop nofitications range, if so, a desktop notification is created; if the current time is after the range, the notification is erased from Chrome's synchronous cache.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='filler-container'></div>
        <div className='single-project-container' id='endless-container'>
          <div className='single-project odd' id='endless'>
            <span></span>
            <div className='project-description'>
              <h1>EndlessSprinter</h1>
              <div className='project-links'>
                <div>
                  <div className='project-live'>
                    <a href='https://jz-wang.github.io/'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479796039/live_ghqrvb.png'/></a>
                  </div>
                  <div className='project-github'>
                    <a href='https://github.com/jz-wang/EndlessSprinter'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479798798/github_h9jurw.png'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='project-description-2 odd'>
            <div id='description-sub'>
              <div id='description-sub-1'>
                <div>
                  <p>Sign up and leave reviews to help other find great local restaurants. All Reviews of a restaurant are tallied and the average rating is calculated when the restaurant is fetched from the database.</p>
                </div>
              </div>
              <div id='description-sub-2'>
                <div id='rating-div'>
                  <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1480350341/review_kxe0zq.png'/>
                </div>
              </div>
            </div>
          </div>
          <div className='project-description-2 odd'>
            <div id='description-sub'>
              <div id='description-sub-1'>
                <div>
                  <p>Sign up and leave reviews to help other find great local restaurants. All Reviews of a restaurant are tallied and the average rating is calculated when the restaurant is fetched from the database.</p>
                </div>
              </div>
              <div id='description-sub-2'>
                <div id='rating-div'>
                  <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1480350341/review_kxe0zq.png'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
