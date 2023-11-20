import logo from './brand.svg';
import './App.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile Page</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div className="profile">
          <div className="profile_details">
            {/* Header Part */}
            <div className="header">
              <div className="header_left">
                <span className="header_span">
                  <img
                    alt="TTT Stories"
                    sizes="100vw"
                    srcSet={`
                    ${logo}  640w,
                    ${logo}  750w,
                    ${logo}  828w,
                    ${logo} 1080w,
                    ${logo} 1200w,
                    ${logo} 1920w,
                    ${logo} 2048w,
                    ${logo} 3840w
                  `}
                    src={logo}
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </span>
              </div>
              <div className="header_right">
                <a href="/login?redirect=/#community">
                  <div className="courses">Courses</div>
                </a>
              </div>
            </div>

            {/* BG Image Part */}
            <div className="bg">
              <img src={"/assets/mybg2.jpg"} alt="Background" />
            </div>

            {/* Profile Part */}
            <div className="details">
              <div className="first">
                <div className="profile_picture">
                  <img src={"/assets/myselfie.jpg"} alt="Profile Picture" />
                </div>
                <div className="profile_name">
                  <div className="p_name">
                    Anuj Gosalia
                    <img src={"/assets/diamond.png"} alt="diamond" />
                    <img src={"/assets/verified.png"} alt="verified" />
                  </div>
                  <div className="counts">
                    <div className="follower_block">
                      <div className="follower fol">6482</div>
                      <div className="fol_name">Followers</div>
                    </div>
                    <div className="following_block">
                      <div className="following fol">245</div>
                      <div className="fol_name">Following</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="bio">
                  <span> Co-founder & CEO at Terribly Tiny Tales </span>
                </div>
                <div className="insta">
                  <a href="http://www.instagram.com/anujgowsalia">
                    http://www.instagram.com/anujgowsalia
                  </a>
                </div>
                <div className="stats">
                  <div className="allicon">
                    <div className="icons">
                      <img src={"/assets/star.png"} alt="star" />125
                    </div>
                    <div className="icons">
                      <img src={"/assets/like_icon.png"} alt="like" />12
                    </div>
                    <div className="icons">
                      <img src={"/assets/vision.png"} alt="views" />57.8k
                    </div>
                    <div className="icons">
                      <img src={"/assets/like.png"} alt="heart" />26.0k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="last">
            <span className="posts">134 Posts</span>
            <div className="content">
              <div className="first_content">
                <div className="heading">
                  <h1>A Changing World Order</h1>
                </div>
                <div className="icon">
                  <img src={"/assets/like_icon.png"} alt="Logo" />
                </div>
              </div>
              <div className="dec">
                The world is changing at the feverish pace. Friend, colleagues
                and everyone engaged in knowledge work are beginning to sense
                this, including ..
              </div>

              <div className="muc">
                <p>
                  <span className="blue-text">musing</span> by anujgosalia
                </p>
              </div>
              <div className="date-time">
                <p>August 2. 2 mins Read . 102 Views</p>
              </div>
              <div className="break"></div>
            </div>
            <hr />
            <div className="content">
              <div className="first_content">
                <div className="heading">
                  <h1>Indian v/s Australia</h1>
                </div>
                <div className="icon">
                  <img src={"/assets/like_icon.png"} alt="Logo" />
                </div>
              </div>
              <div className="dec">
                Think about it - this cricket series was akin to therapy. Laying
                our childhood trauma up top, working with it slowly and surely
                over two m...
              </div>

              <div className="muc">
                <p>
                  <span className="blue-text">thought</span> by anujgosalia
                </p>
              </div>
              <div className="date-time">
                <p>January 21. 1 mins Read . 156 Views</p>
              </div>
            </div>
            <hr />
            <div className="content">
              <div className="first_content">
                <div className="heading">
                  <h1>Write To Build</h1>
                </div>
                <div className="icon">
                  <img src={"/assets/like_icon.png"} alt="Logo" />
                </div>
              </div>
              <div className="dec">
                Writing is the first step to create:
                <ol>- stories</ol>
                <ol>- products</ol>
                <ol>- companies</ol>
              </div>

              <div className="muc">
                <p>
                  <span className="blue-text">thoughts</span> by anujgosalia
                </p>
              </div>
              <div className="date-time">
                <p>November 18. 1 mins Read . 228 Views</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default App;
