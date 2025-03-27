import React, { useState } from "react";
import Sidebar from '../components/SideBar'
import { Breadcrumbs, Button, Typography, Modal, Box, TextField, MenuItem, IconButton, Grid2, Grid } from "@mui/material";
import { Link } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import { Edit, Delete, Add, Height, RemoveRedEye } from "@mui/icons-material";
import DeleteBtn from "../Components/DeleteBtn";
import CloseBtn from "../Components/closebtn";
import PrimaryBtn from "../Components/PrimaryBtn";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";



const status = [
  {
    value: "developer",
    label: "Developer",
  },
  {
    value: "designer",
    label: "Designer",
  },
  {
    value: "manager",
    label: " Manager",
  },
  {
    value: "qualityanalyst",
    label: "Quality Analyst",
  },
  {
    value: "businessanalyst",
    label: "Business Analyst",
  },
  {
    value: "devopsengineer",
    label: "Devops Engineer",
  },
];

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  Height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const Team = () => {
  const [open, setOpen] = useState(false);
  const [team, setTeam] = useState([
    { id: 1, name: "Sophia Smith", email: "sophia.smith@example.com", role: "Project Manager", department: "Design", skills: ["AWS", "Django"] },
    { id: 2, name: "Emily Smith", email: "emily.smith@example.com", role: "DevOps Engineer", department: "Engineering", skills: ["HTML", "Node.js"] },
    { id: 3, name: "Alex Johnson", email: "alex.johnson@example.com", role: "Designer", department: "QA", skills: ["Figma", "Django"] },
    { id: 4, name: "John Garcia", email: "john.garcia@example.com", role: "Designer", department: "Product", skills: ["TypeScript", "CSS"] },
    { id: 5, name: "Jane Smith", email: "jane.smith@example.com", role: "DevOps Engineer", department: "QA", skills: ["AWS", "JavaScript"] },
  ]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  
  // Delete modal open and close
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };


  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 5;  // Ensure this is defined too

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = team.slice(indexOfFirstMember, indexOfLastMember);


  // View Modal open and close
  const [viewOpen, setViewOpen] = useState(false);
  const handleViewOpen = () => {
    setViewOpen(true);
  };
  const handleViewClose = () => {
    setViewOpen(false);
  };

  // Tab panel in view modal
  const [activeTab, setActiveTab] = useState("Team Details");


  return (
    <Sidebar>
      <div className="m-6">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>

          <Typography sx={{ color: "text.primary" }}>Teams</Typography>
        </Breadcrumbs>
      </div>

      <div className="flex flex-row flex-wrap place-content-between px-6 gap-x-2 gap-y-4">
        <div>
          <h4 className="text-2xl font-bold">Team Management</h4>
        </div>
        <div>
          <Button
            onClick={handleOpen}
            variant="contained"
            startIcon={<AddIcon />}

            className="bg-[var(--primary1)_!important]"
          >
            Add team
          </Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }} className="rounded-2xl " >
          {/* <div>
              <h5 className=" text-2xl font-bold">Add Project</h5>
              <form action="" className="mt-8 flex flex-col gap-y-4">
                <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 w-full   ">
                  <TextField
                    id="projectName"
                    type="text"
                    fullWidth
                    label="Project Name"
                    variant="outlined"
                  />
                  <TextField
                    id="projectStatus"
                    select
                    fullWidth
                    label="Status"
                    variant="outlined"
                  >
                    {status.map((data) => (
                      <MenuItem key={data.value} value={data.value}>
                        {data.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 w-full">
                  
                </div>

                <div>
                  <TextField multiline label='Description' rows={4} fullWidth id="projectDescription"/>
                  
                </div>

                <div className="flex flex-row flex-wrap gap-4 justify-end">
                  <Button onClick={handleClose} variant="contained" color="inherit" >Cancel</Button>
                  <Button color="primary" variant="contained" >Submit</Button>
                </div>
              </form>
            </div> */}
          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        </Box>
      </Modal>
 
      <Modal
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style, width: 400 }} className="rounded-[.5rem] ">
            <div className="w-full py-3 font-roboto text-2xl">
              <div >Confirm You Want To Delete ?</div>
              {/* <div className="flex flex-row flex-wrap gap-4 justify-end" variant= "contained">
                <CloseBtn
                  onClick={handleDeleteClose}
                  className={"border border-gray"}
                >
                   NO
                </CloseBtn>
                <CloseBtn
                  onClick={handleDeleteClose}
                  className={"border border-gray"}
                >
                  YES
                </CloseBtn>
                <DeleteBtn>Delete</DeleteBtn>
              </div> */}
              <div className="flex flex-row flex-wrap gap-4 justify-end  mt-8">
                <Button onClick={handleDeleteClose} variant="contained" color="inherit" >NO</Button>
                <Button color="primary" variant="contained" >YES</Button>
              </div>
            </div>
          </Box>
        </Modal>


        <Modal
          open={viewOpen}
          onClose={handleViewClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="w-full  ">
              <div>
                <div className="  mx-auto ">
                  {/* Tab Navigation */}
                  <div className="flex flex-row justify-between items-start ">
                    <div className="flex max-w-md w-full gap-2">
                      {[ "Team Details"].map(
                        (tab) => (
                          <button
                            key={tab}
                            className={`flex-1 mb-4 cursor-pointer bg-gray-300 py-2 text-center  capitalize border-b-2  
            ${activeTab === tab ? " border-[var(--primary1)] text-[var(--primary1)] font-bold" : "text-gray-800 border-transparent font-semibold"}`}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </button>
                        )
                      )}
                    </div>

                    <div className="w-[2rem] text-black">
                      <IconButton onClick={handleViewClose}>
                        <CancelIcon className="text-gray-800" />
                      </IconButton>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="h-[20rem] overflow-scroll no-scrollbar">
                    <div className="p- h-fit">
                      {activeTab === "Team Details" && (
                        <div className="">
                          <Grid2 container >
                            <Grid2 size={6} className="">
                              
                            </Grid2>

                            <Grid2 size={6}>

                            </Grid2>
                          </Grid2>
                          
                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Name : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>Megha Singh</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Email : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>megha123@gmail.com</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className=""> Phone : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>985647895</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className=""> Role : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>Designer</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className=""> Profile Image : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi!</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className=""> Status : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>Active</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Country : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>India</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">State : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Jharkhand</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Address : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam deserunt aut sint ad.</div>
                            </Grid2>
                          </Grid2>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-8 justify-end gap-4">
                <CloseBtn
                  onClick={handleViewClose}
                  className={"border border-gray"}
                >
                  Close
                </CloseBtn>
              </div>
            </div>
          </Box>
        </Modal>

      {/* for Add Team */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }} className="rounded-2xl " >
          <div>
            <h2 className="text-xl font-semibold">Edit Team Member</h2>
            <form action="" className="mt-8 flex flex-col gap-y-4">

              
              <Grid2 container spacing={2}>
              <Grid2 size={{xs:12,sm:6}} className="flex flex-col space-x-10">
                <label htmlFor="TeamName">
                  Name <span className="text-red-600">*</span>
                </label>
                <input className="w-full p-2 border rounded" type="text" placeholder="Name" required />
              </Grid2>
              

              <Grid2 size={{xs:12,sm:6}}  className="flex flex-col space-x-10">
                <label htmlFor="TeamEmail">
                  E-mail <span className="text-red-600">*</span>
                </label>
                <input className="w-full p-2 border rounded" type="text" placeholder="E-mail" required />
              </Grid2>
              </Grid2>

              <Grid2 container spacing={2} className="w-full">
                <Grid2 size={{xs:12,sm:6}} className="flex flex-col space-x-10">
                <label htmlFor="TeamRole">
                  Role<span className="text-red-600">*</span>
                </label>
                <select className="w-full p-2 border rounded" type="text" placeholder="Role" required>
                  <option value="option1">Role </option>
                  <option value="option2">Designer</option>
                  <option value="option3">Quality Analyst</option>
                  <option value="option2">Developer</option>
                  <option value="option2">Devops Engineer</option>
                  <option value="option2">Business Analyst</option>
                </select>
                </Grid2>
              
              <Grid2 size={{xs:12,sm:6}} className="flex flex-col space-x-10">
                <label htmlFor="TeamRole">
                  Status<span className="text-red-600">*</span>
                </label>
                <select className="w-full p-2 border rounded" type="text" placeholder="Role" required>
                  <option value="option1">Active </option>
                  <option value="option2">Not Active</option>
                  
                </select>
              </Grid2>
              </Grid2>

              <div>
                <label htmlFor="TeamDepartment">Profile Image</label>
                <input className="w-full p-2 border rounded" type="text" placeholder="Profile Image" required />
              </div>

              

              <div>
                <label htmlFor="TeamDate">Country</label>
                <input className="w-full p-2 border rounded" type="text" placeholder="Country" required />
              </div>
              <div>
                <label htmlFor="TeamSkills">State</label>
                <input className="w-full p-2 border rounded" type="text" placeholder="State" required />
              </div>
              <div>
                <label htmlFor="TeamSkills">Pincode</label>
                <input className="w-full p-2 border rounded" type="numbers" placeholder="Pincode" required />
              </div>
              <div>
                <label htmlFor="TeamSkills">Address</label>
                <input className="w-full p-2 border rounded" type="text" placeholder="Address" required />
              </div>
              <div className="flex flex-row flex-wrap gap-4 justify-end">
                <Button onClick={handleClose} variant="contained" color="inherit" >Cancel</Button>
                <Button color="primary" variant="contained" >Submit</Button>
              </div>
            </form>
          </div>
          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        </Box>
      </Modal>

      <div className="bg-white p-4 rounded-lg shadow">
        {currentMembers.map((member) => (
          <div key={member.id} className="flex justify-between items-center border-b p-3">
            <div>
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-500">{member.email} — {member.role}, {member.department}</p>
              <div className="flex gap-2 mt-1">
                {member.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">{skill}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
            <IconButton onClick={handleViewOpen}
                      aria-label="view"
                      color="success">
                <RemoveRedEyeIcon/>
            </IconButton>
              <IconButton color="primary" onClick={() => handleOpen(member)}>
                <Edit />
              </IconButton>
              <IconButton onClick={handleDeleteOpen}
                      aria-label="delete"
                      color="error">
                <Delete />
            </IconButton>
            </div>
          </div>
        ))}
      </div>




    </Sidebar>
  )
}

export default Team

