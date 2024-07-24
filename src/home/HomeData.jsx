import React from "react";
import logo from "../assets/logo.png";

const wwa=(<p>
    Bharathi Vidyalaya was established in the year 1987 (Recognised by the Govt. of Tamil Nadu). Through continued diligence and hard-work we have provide a strong foundation to hundreds of students with weak economic background. The students who have received primary
       education in our school have excelled not only in academics but also in various extra-curricular activities as they move to high schools.In 2019, there was a shift in the management, when retired and experienced, <b>Mrs. S. Mercy Dabora
       (State best teacher awardee 2017)</b> and her husband <b>Mr. J. Dhanasingh</b> acquired the school and have heavily invested in renovations. More than commercial interest, we had a motive to educate the rural population around the school. Our
       dream of providing equal education to everyone irrespective of the economic background is being fulfilled through our school.
</p>)

const wwd=(<p>
<b>OUR VISION</b>
<p>To promote wholesome learning and groom students to become citizens of the world with the passion for learning and commitment to become socially responsible, emotionally balanced, physically fit, confident, self-reliant, empathetic, patriotic, culturally enriched, patriotic individuals. Our Motto revolves around Discipline, Hardwork and Achievement.</p>
<b>OUR MISSION</b>
<p>To provide all students in our schools<br/>
•	Quality education that will give them the opportunity to grow into communicative and confident individuals that will help them excel and succeed in life.<br/>
•	Opportunities that will enable them to identify their potential, optimise their ability, and help them become wholesome individuals.<br/>
•	An education that will help understand society and their own responsibilities towards it, nurture the environment in which they live and respect every individual’s uniqueness.</p>
<b>FACILITIES</b>
<p>•	Transport facility<br/>
•	Budget fee structure<br/>
•	1:20 Teacher to student ratio<br/>
•	Kaipara area’s Resource Teachers for Learning and Behaviour (RTLB) and Resource Teacher: Literacy (RTLit) based by our school. We also have our own SWiS (Social Worker in School)<br/>
•	RTE
</p>
</p>)

const ECData = {
  name: "Bharathi Vidyalaya",
  slogan: "Discipline,Hardwork,Achievement",
  logo: logo,
  details: [
    {
      id: "wwa",
      name: "Who We Are",
      paras: [
        wwa
      ],
      tileData: [
        {
          name: "DHANASINGH J",
          detail: "Chairman/HeadMaster",
          animationIn: "fadeIn",
          animationOut: "fadeOut",
          img: '',
        },
        {
          name: "MERCY DABORA S",
          detail: "Correspondent, State Best Teacher Awardee",
          animationIn: "fadeIn",
          animationOut: "fadeOut",
          img: '',
        }
      ]
    },
    {
      id: "wwd",
      name: "What We Do",
      paras: [
        wwd
      ],
    },
    {
      id: "wea",
      name: "Where We Are",
      data:{
        mobNumber: "97892 72834",
        email: "bharathividyalayanps@gmail.com",
        facebook: "https://www.facebook.com/Bharathi-Vidyalaya-Kulipatty-103986814641455",
        location: "https://www.google.co.in/maps/place/BHARATHI+VIDYALAYA+NURSERY+AND+PRIMARY+SCHOOL/@10.3830759,78.0196592,18.59z/data=!4m12!1m6!3m5!1s0x3b00a993ab22833f:0x887f43c4647a417!2sBHARATHI+VIDYALAYA+NURSERY+AND+PRIMARY+SCHOOL!8m2!3d10.382798!4d78.0204056!3m4!1s0x3b00a993ab22833f:0x887f43c4647a417!8m2!3d10.382798!4d78.0204056?hl=en",
      },
      paras: []
    },
    {
      id: "gallery",
      name: "Gallery",
      paras: [],
      tileData: [
        {
          name: "Annual Day",
          detail: "19-Jan-2024",
          animationIn: "fadeIn",
          animationOut: "fadeOut",
          img: '',
        },
        {
          name: "Medical Camp",
          detail: "21-Jan-2024",
          animationIn: "fadeIn",
          animationOut: "fadeOut",
          img: '',
        },
        {
          name: "Sports Day",
          detail: "30-Jun-2024",
          animationIn: "fadeIn",
          animationOut: "fadeOut",
          img: '',
        },
      ]
    },
    {
      id: "ctu",
      name: "Reach Us",
      paras: []
    }
  ]
};

export { ECData };
