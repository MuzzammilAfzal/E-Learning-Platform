const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    contactNumber:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    accountType:{type:String,required:true,enum:["mentor","student"],default:"student"},
    // active:{type:String,required:true},
    // approve:{type:String,required:true},
    courses:[{type:mongoose.Schema.Types.ObjectId, ref:"course"}],
    profile:[{type:mongoose.Schema.Types.ObjectId, ref:"profile"}],
    courseProgress:[{type:mongoose.Schema.Types.ObjectId, ref:"courseProgress"}],
})


const profileSchema= new mongoose.Schema({
    gender:{type:String},
    dateOfBirth:{type:String},
    about:{type:String},
    contactNumber:{type:String}
})



const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseDescription: { type: String },
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  whatWillLearn: { type: String },
  price: { type: Number, required: true },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }],
  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  courseContent: [{ type: mongoose.Schema.Types.ObjectId, ref: "section" }]
});



const tagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  course: [{ type: mongoose.Schema.Types.ObjectId, ref: "course" }]
});



const courseProgressSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "course", required: true },
  completedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: "subsection" }]
});



const sectionSchema = new mongoose.Schema({
  sectionName: { type: String, required: true },
  subSection: [{ type: mongoose.Schema.Types.ObjectId, ref: "subSection" }]
});



const subSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  timeDuration: { type: String },
  description: { type: String },
  videoUrl: { type: String },
  additionalUrl: { type: String }
});




const User = mongoose.model("User", userSchema);
const Course = mongoose.model("Course", courseSchema);
const Profile = mongoose.model("Profile", profileSchema);
const CourseProgress = mongoose.model("CourseProgress", courseProgressSchema);
const Section = mongoose.model("Section", sectionSchema);
const SubSection = mongoose.model("SubSection", subSectionSchema);
const Tag = mongoose.model("Tag", tagSchema);

module.exports = {
  User,
  Course,
  Profile,
  CourseProgress,
  Section,
  SubSection,
  Tag
};

