import { Card ,Button} from "@mui/material";
// import image2 from "../../assets/image/image2.jpg";
const image = require("../../assets/image/Profile.png");
const image7 = require("../../assets/image/add-user.png");
const group1 = require("../../assets/group1.png");
const group2 = require("../../assets/Group2.jpg");
const group3 = require("../../assets/image/image19.png");
const group4 = require("../../assets/image/image3.jpg");



const RightSidebar = () => {
    return (
      <div className="right-sidebar">
        <Card className="suggest-group">
          <Card className="suggest-group-tittle">
            <span>Suggest Group</span><Button>see all</Button>
          </Card>
          <Card className="suggest-group-body">
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "0px" }}
            >
              <img src={`${group1}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "grey",
                  fontSize: 13,
                  width: "120px",
                  textAlign: "start",
                  fontWeight: 700,
                  paddingLeft:'7px'
                }}
              >
                Clever Cats
              </p>
              <img src={`${image7}`} className="likeimage" alt="" />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <img src={`${group2}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "grey",
                  fontSize: 13,
                  width: "120px",
                  textAlign: "start",
                  fontWeight:700,
                  paddingLeft:'7px'
                }}
              >
                ALT F4
              </p>
              <img src={`${image7}`} className="likeimage" alt="" />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <img src={`${group3}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "grey",
                  fontSize: 13,
                  textAlign: "start",
                  width: "120px",
                  fontWeight:700
                }}
              >
                Talented Tyrants
              </p>
              <img src={`${image7}`} className="followinguserimage" alt="" />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <img src={`${group4}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "grey",
                  fontSize: 13,
                  width: "120px",
                  textAlign: "start",
                  fontWeight:700
                }}
              >
                Clever Clowns
              </p>
              <img src={`${image7}`} className="likeimage" alt="" />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <img src={`${image}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "grey",
                  fontSize: 13,
                  width: "120px",
                  textAlign: "start",
                  fontWeight:700
                }}
              >
                Cheery Cherries
              </p>
              <img src={`${image7}`} className="followinguserimage" alt="" />
            </div>
          </Card>
        </Card>
        <Card className="suggest-page">
          <Card className="suggest-page-tittle">
            <span>Suggest Page</span><Button>see all</Button>
          </Card>
          <Card className="suggest-page-body">
          <div
              style={{ display: "flex", alignItems: "center", marginTop: "0px" }}
            >
              <img src={`${image}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "#aaa",
                  fontSize: 13,
                  width: "120px",
                  textAlign: "start",
                }}
              >
                Education Revolution
              </p>
              <img src={`${image7}`} className="likeimage" alt="" />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <img src={`${group4}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "#aaa",
                  fontSize: 13,
                  width: "120px",
                  textAlign: "start",
                }}
              >
                Study Buddies
              </p>
              <img src={`${image7}`} className="likeimage" alt="" />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <img src={`${group3}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "#aaa",
                  fontSize: 13,
                  textAlign: "start",
                  width: "120px",
                }}
              >
                Clever Classroom
              </p>
              <img src={`${image7}`} className="followinguserimage" alt="" />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <img src={`${group1}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "#aaa",
                  fontSize: 13,
                  width: "120px",
                  textAlign: "start",
                }}
              >
                Student Survival Guide
              </p>
              <img src={`${image7}`} className="likeimage" alt="" />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <img src={`${image}`} className="notificationimg" alt="" />
              <p
                style={{
                  marginLeft: "5px",
                  color: "#aaa",
                  fontSize: 13,
                  width: "120px",
                  textAlign: "start",
                }}
              >
                Suman started to following you
              </p>
              <img src={`${image7}`} className="followinguserimage" alt="" />
            </div>
          </Card>
        </Card>
      </div>
    );
  };

  export default RightSidebar;